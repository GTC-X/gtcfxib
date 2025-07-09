// const Metatrader5 = require("mt5-sdk");
// const axios = require("axios");

// const group = "demo\\web.hedged";


// const mt5Instance = new Metatrader5("mtapi.gtcfx.com", 443, {
//     login: 5550, //// this one
//     password: "API-l6zBqIz",
//     build: 4380,
//     agent: "WebManager",
//    });


// async function clientPipeline(credentials) { 
//     // Create Client
//     const newClient = {
//         PersonName: credentials.first_name,
//         ContactPhone: credentials.phone,
//         ContactEmail: credentials.email,
//         ClientType: "1",
//     };

//     const client = await mt5Instance.clients.create(newClient);

//     console.log("client", { client })


//     if (!client?.[0]?.id) {
//         return {
//             message: client?.[0]?.retcode,
//             success: false
//         }
//     }

//     const client_id = client[0].id;
//     // Add User

//     console.log("ccc", { client,credentials })

//     const user = await mt5Instance.users.create({
//         Login: 0, // assuming server allocates a login automatically
//         PassMain: credentials.password,
//         PassInvestor: credentials.password,
//         Rights: 0,
//         Group: credentials.group,
//         Name: credentials.first_name,
//         FirstName: credentials.first_name,
//         LastName: "", // Adjust accordingly
//         Company: credentials.company,
//         Language: "9", // Language code for English
//         City: "",
//         State: "",
//         Zipcode: "",
//         Address: "",
//         Country: credentials.country,
//         Phone: credentials.phone,
//         Email: credentials.email,
//         ID: 0, // placeholder, replace with actual ID if needed
//         Status: 1,
//         Comment: "",
//         Color: 0,
//         PhonePassword: credentials.password,
//         Leverage: 500,
//         Agent: 0,
//     });

//     console.log("ccc", { user })

//     if (!user?.Login) {
//         return {
//             message: "Something went wrong while adding user try again!",
//             success: false
//         }
//     }
//     // Bind the user account to the client
//     const bindBody = [{ user: user.Login, client: client_id }];

//     const bindUser = await mt5Instance.clients.addUser(bindBody);

//     const zappierData = {
//         first_name: credentials.first_name,
//         phone: credentials.phone,
//         email: credentials.email,
//         company: credentials.company,
//         country: credentials.country,
//         client_id: client_id,
//         user_login: user.Login,
//         password: credentials.password,
//         // ip_address: req.ip, // Get the IP address of the client
//     };

//     const zappier = await axios.post(
//         "https://hooks.zapier.com/hooks/catch/16420445/2bfgi0j/",
//         zappierData
//     );

//     return {
//         message: "Client and user added and bound successfully",
//         success: true,
//         user: user?.Login
//     }

// }


// export default clientPipeline



const Metatrader5 = require("mt5-sdk");
const axios = require("axios");

const mt5Instance = new Metatrader5("mtapi.gtcfx.com", 443, {
    login: 5550,
    password: "API-l6zBqIz",
    build: 4380,
    agent: "WebManager",
});

async function clientPipeline(credentials) {
    // Create the client
    const newClient = {
        PersonName: credentials.first_name,
        ContactPhone: credentials.phone,
        ContactEmail: credentials.email,
        ClientType: "1",
    };

    const clientResponse = await mt5Instance.clients.create(newClient);
    if (!clientResponse?.[0]?.id) {
        return {
            message: clientResponse?.[0]?.retcode,
            success: false,
        };
    }
    const client_id = clientResponse[0].id;
    console.log("Client created:", clientResponse);

    // Create the user
    const userResponse = await mt5Instance.users.create({ 
        Login: 0, // Let the server auto-assign a login
        PassMain: credentials.password,
        PassInvestor: credentials.invest_password,
        rights: 0,
        Group: credentials.group,
        Name: credentials.first_name,
        FirstName: credentials.first_name,
        LastName: "", // Adjust if a last name is available
        Company: credentials.company,
        Language: "9", // Language code for English
        City: "",
        State: "",
        ZipCode: "",
        Address: "",
        Country: credentials.country,
        Phone: credentials.phone,
        Email: credentials.email,
        ID: 0, // placeholder
        Status: 1, // Set to 1 to mark the account as enabled
        Comment: "New account created by Web API",
        Color: 0,
        PhonePassword: credentials.password,
        Leverage: 500,
        Agent: 0,
    });
    console.log("User created:", userResponse);

    if (!userResponse?.Login) {
        return {
            message: "Something went wrong while adding the user. Try again!",
            success: false,
        };
    }

    // Bind the user account to the client
    const bindPayload = [{ user: userResponse.Login, client: client_id }];
    const bindResult = await mt5Instance.clients.addUser(bindPayload);
    console.log("Binding result:", bindResult);

    // Deposit a fixed amount of 10,000 into the user's account
    // const depositResponse = await mt5Instance.users.deposit({
    //     Login: userResponse.Login,
    //     Amount: 10000,
    //     Comment: "Initial deposit of 10000",
    // });
    // console.log("Deposit result:", depositResponse);

    return {
        message: "Client and user added and bound successfully", 
        success: true,
        user: userResponse.Login,
    };
}

export default clientPipeline;
