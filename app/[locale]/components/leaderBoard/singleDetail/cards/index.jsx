"use client";

const ReturnCard = ({ value, name, percent, classes = "" }) => {
    return (
        <div className={`border ${classes || "bg-gray-200"} text-center text-primary p-4 rounded-md`}>
            <p className="text-lg font-semibold text-secondary">{value || "-"}{percent || ""}
            </p>
            <p className="text-xs font-normal">{name || ""}
            </p>
        </div>
    )
}

export default ReturnCard