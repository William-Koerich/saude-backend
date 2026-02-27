if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET não definido no .env")
}

export default {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: "1d",
  },
}