import bcrypt from "bcrypt";
const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456", 10),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456", 10),
      isAdmin: false,
    },
  ],
  Products: [
    {
      
      name: "Classic White T-Shirt",
      slug: "classic-white-t-shirt-1",
      image:
        "https://media.istockphoto.com/id/2073254261/photo/an-adult-man-is-using-his-smartphone.jpg?s=1024x1024&w=is&k=20&c=xNIjvUR3J7C1fFcCbjq_syI3rDb0loJ_xyvDkZx7PCU=",
      banner:
        "https://media.istockphoto.com/id/2073254261/photo/an-adult-man-is-using-his-smartphone.jpg?s=1024x1024&w=is&k=20&c=xNIjvUR3J7C1fFcCbjq_syI3rDb0loJ_xyvDkZx7PCU=",
      price: 19.99,
      brand: "StyleCo",
      description:
        "A versatile classic white t-shirt made from premium cotton.",
      category: "Tops",
      rating: 4.5,
      numReviews: 100,
      countInStock: 200,
      color: ["White", "Black", "Grey"],
      size: ["S", "M", "L", "XL"],
    },
    {
      
      name: "Denim Jeans",
      slug: "denim-jeans-2",
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      banner:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 49.99,
      brand: "DenimX",
      description: "High-quality denim jeans with a comfortable fit.",
      category: "Bottoms",
      rating: 4.7,
      numReviews: 150,
      countInStock: 100,
      color: ["Blue", "Black"],
      size: ["28", "30", "32", "34", "36"],
    },
    {
      
      name: "Summer Floral Dress",
      slug: "summer-floral-dress-3",
      image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      banner:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      price: 59.99,
      brand: "FloralFash",
      description: "Lightweight summer dress with a beautiful floral pattern.",
      category: "Dresses",
      rating: 4.8,
      numReviews: 200,
      countInStock: 50,
      color: ["Red", "Blue", "Yellow"],
      size: ["S", "M", "L"],
    },
    {
      
      name: "Leather Jacket",
      slug: "leather-jacket-4",
      image:
        "https://images.pexels.com/photos/29668943/pexels-photo-29668943/free-photo-of-stylish-man-in-beige-coat-leaning-against-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      banner:
        "https://images.pexels.com/photos/29668943/pexels-photo-29668943/free-photo-of-stylish-man-in-beige-coat-leaning-against-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 129.99,
      brand: "LeatherLux",
      description: "Premium leather jacket with a modern fit and finish.",
      category: "Outerwear",
      rating: 4.9,
      numReviews: 300,
      countInStock: 30,
      color: ["Black", "Brown"],
      size: ["M", "L", "XL"],
    },
    {
      
      name: "Sporty Sneakers",
      slug: "sporty-sneakers-5",
      image:
        "https://images.pexels.com/photos/29633542/pexels-photo-29633542/free-photo-of-man-in-elegant-white-room-with-classical-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      banner:
        "https://images.pexels.com/photos/29633542/pexels-photo-29633542/free-photo-of-man-in-elegant-white-room-with-classical-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 79.99,
      brand: "SneakerHub",
      description: "Comfortable and stylish sneakers for everyday wear.",
      category: "Footwear",
      rating: 4.6,
      numReviews: 250,
      countInStock: 150,
      color: ["White", "Black", "Grey"],
      size: ["7", "8", "9", "10", "11"],
    },
    {
      
      name: "Classic White T-Shirt",
      slug: "classic-white-t-shirt-6",
      image:
        "https://images.pexels.com/photos/29668943/pexels-photo-29668943/free-photo-of-stylish-man-in-beige-coat-leaning-against-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      banner:
        "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg",
      price: 19.99,
      brand: "StyleCo",
      description:
        "A versatile classic white t-shirt made from premium cotton.",
      category: "Tops",
      rating: 4.5,
      numReviews: 100,
      countInStock: 200,
      color: ["White", "Black", "Grey"],
      size: ["S", "M", "L", "XL"],
    },
    {
      
      name: "Denim Jeans",
      slug: "denim-jeans-7",
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      banner:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 49.99,
      brand: "DenimX",
      description: "High-quality denim jeans with a comfortable fit.",
      category: "Bottoms",
      rating: 4.7,
      numReviews: 150,
      countInStock: 100,
      color: ["Blue", "Black"],
      size: ["28", "30", "32", "34", "36"],
    },
    {
      
      name: "Summer Floral Dress",
      slug: "summer-floral-dress-8",
      image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      banner:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      price: 59.99,
      brand: "FloralFash",
      description: "Lightweight summer dress with a beautiful floral pattern.",
      category: "Dresses",
      rating: 4.8,
      numReviews: 200,
      countInStock: 50,
      color: ["Red", "Blue", "Yellow"],
      size: ["S", "M", "L"],
    },
  ],
};

export default data;
