import woman from '../assets/woman-avatar-smaller.webp'

interface recentWorkCardData {
  title: string
  text: string
  name: string
  avatar: string
}

const data:recentWorkCardData[] = [
  {
    title: "5 Methods to Increase Visibility", 
    text: "Praesent porta enim augue, et iaculis sem scelerisque id. Nulla sagittis fringilla imperdiet. Donec vestibulum leo a diam pharetra, vel ullamcorper mauris convallis.",
    name: "Jane Doe",
    avatar: woman
  },
  {
    title: "How To Gain More Customers", 
    text: "Praesent porta enim augue, et iaculis sem scelerisque id. Nulla sagittis fringilla imperdiet. Donec vestibulum leo a diam pharetra, vel ullamcorper mauris convallis.",
    name: "Jane Doe",
    avatar: woman
  },
  {
    title: "Free AI Tools You Can Use Today", 
    text: "Praesent porta enim augue, et iaculis sem scelerisque id. Nulla sagittis fringilla imperdiet. Donec vestibulum leo a diam pharetra, vel ullamcorper mauris convallis.",
    name: "Jane Doe",
    avatar: woman
  },
]; 

export default data;