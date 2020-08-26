module.exports = {
    getStocks: function (input) {
        //let newStocks = []
        for (let i = 0; i < input.length; i++) {
            let multiplier = Math.random() * 0.1 - 0.05;
            input[i].price = Number(parseFloat(input[i].price * multiplier + input[i].price).toFixed(2));
            //newStocks.push(input[i]);
        }
        return;
    },

    companies: [
        {
            name: "AAPL",
            fullName: "Apple",
            price: 458.83,
            logo: "https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png",
            description: "Apple Inc. designs, manufactures and markets mobile communication and media devices, personal computers and portable digital music players. The Company sells a range of related software, services, accessories, networking solutions, and third-party digital content and applications."
        },
        {
            name: "FB",
            fullName: "Facebook",
            price: 261.16,
            logo: "https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Facebook-Logo.png?fit=600%2C600"
        },
        {
            name: "GOOG",
            fullName: "Google",
            price: 1516.24,
            logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
        },
        {
            name: "GTSBY",
            fullName: "Gatsby",
            price: 4990.12,
            logo: "https://media-exp1.licdn.com/dms/image/C560BAQHuiTdDW58LOw/company-logo_200_200/0?e=1606348800&v=beta&t=DVVrNQXp9Kw6WAH0XqjvdXJUboA2N8yvkBkE0h0XA-s"
        },
        {
            name: "AMZN",
            fullName: "Amazon",
            price: 3284.72,
            logo: "https://pngimg.com/uploads/amazon/amazon_PNG5.png"
        }
    ]
  };