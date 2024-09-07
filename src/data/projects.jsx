const projects = [
    {
        id: 1,
        title: "Coffee shop",
        images: ["/images/waysbucks-home.png","/images/waysbucks-menu.png"],
        stack: ["ReactJs", "NodeJs", "ExpressJs", "PostgreSQL", "Bootstrap"],
        repository: "https://github.com/yoddidahsyat/DWF19PFK3_WaysBucks",
        link: "https://yoddi-waysbucks.netlify.app",
        description: <div>
            <p>Waysbucks is an online store website application for an imaginary coffee shop. Buyers can make an account, choose some menus and combined toppings, and upload proof of payment. Meanwhile admin can monitor and change the status of transactions. Admin can also add, edit, or delete products and toppings.</p>
            This is the process of a complete transaction in WaysBucks:
            <ol>
                <li>user signup/login</li>
                <li>choose one or more products with or without toppings</li>
                <li>fill in transaction detail</li>
                <li>make a payment (this is imaginary)</li>
                <li>upload payment proof (use any photo)</li>
                <li>admin checks the payment proof, and change the transaction status into On Delivery (if payment is valid) or Cancelled (if payment is invalid)</li>
                <li>user wait and change the status when the coffee is delivered</li>
                <li>transaction completed.</li>
            </ol>
            To make a transaction you can login or register a new account as user (no valid email needed), and you can use this account to login as admin:
            <ul>
                <li>Email:admin@waysbucks.com</li>
                <li>Password: waysbucks</li>
            </ul>
        </div>
    },
    // {
    //     id: 2,
    //     title: "To Do List",
    //     images: ["/images/todolist-home1.png","/images/todolist-home2.png", "/images/todolist-detail.png", "/images/todolist-add.png"],
    //     stack: ["ReactJs", "Bootstrap"],
    //     repository: "https://github.com/yoddidahsyat/to-do-list",
    //     link: "https://yoddi-todolist-devcode.netlify.app/",
    //     description: <div>
    //         <p>This is a simple frontend project case from gethired.id. The backend APIs and the UI designs are already given by the gethired team. In this app user can manage activity groups, add, delete, edit, and check their to-do list.</p>
    //     </div>
    // }
]

export default projects
