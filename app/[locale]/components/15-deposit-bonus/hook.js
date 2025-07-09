import axios from "axios"
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

const useFormHook = () => {
    const [step, setStep] = useState("1")
    const [data, setData] = useState(null)
    const [crmList, setCrmList] = useState([])
    const [loadingCrm, setLoadingCrm] = useState(false)
    const [message, setMessage] = useState(null)
    const pathName = usePathname()
    const router = useRouter();
    const getCrmData = (email, setStep) => {
        setLoadingCrm(true)
        axios.get(`/api/get-crm-data?email=${email}`).then(res => {
            if (res?.data?.exists) {
                setMessage(true)
                setStep("2")
            } else {
                setMessage(false)
            }
        }).catch((err) => {
            toast.error(err?.message)
            setMessage(null)
        }).finally(() => {
            setLoadingCrm(false)
        })
    }

    const formatDate = () => {
        const date = new Date()
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' }).toLowerCase(); // 'aug'
        const year = date.getFullYear();

        return `${day}${month}${year}`;
    };


    const handleSubmitData = async (data, formik, setLoading, commonForm, sendMail = false) => {
        sendDataToZaiper({ ...data, user_referrer: localStorage.getItem("user_referrer") }, sendMail)
        const date = new Date()
        let payload = {
            fbclid: data?.fbclid,
            utm_campain: data?.utm_campain,
            utm_source: data?.utm_source,
            Full_name: data?.Full_name || data?.first_name,
            Email_address: data?.email,
            Account_number: data?.account_no,
            Country: data?.country,
            terms: data?.terms,
            Campaign_code: `${formatDate()}`,
            Campaign_name: pathName?.slice(1),
            qr_code_id: data?.qr_code_id,
            Phone_number: data?.phone,
            create_time: new Date()
        }
        const res = await fetch('/api/insetData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        const result = await res.json();
        if (result.success) {
            toast.success('Data inserted successfully');
            formik.resetForm();
            setLoading(false)
            if (commonForm) {
                router.push(`/thank-you?${pathName?.slice(11)}`);
            }
        } else {
            toast.error('Error inserting data: ' + result.error);
            setLoading(false)
        }
    }

    const sendDataToZaiper = async (data, sendMail) => {
        if (sendMail) {
            axios.post(
                `/api/email`,
                JSON.stringify(data)
            ).then(res => {
                console.log({ res })
            }).catch(err => {
                console.log({ err })
            })
        }
        axios.post(`https://hooks.zapier.com/hooks/catch/16420445/3kq25sj/`, JSON.stringify(data)).then(res => {
            console.log({ res })
        }).catch((err) => {
            console.log({ err })
        })

    }


    return { step, setStep, data, setData, crmList, loadingCrm, getCrmData, message, handleSubmitData }
}
export default useFormHook