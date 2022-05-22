import woman from '../assets/woman-avatar.jpg'

interface recentWorkCardData {
  title: string
  text: string
  name: string
  avatar: string
}

const data:recentWorkCardData[] = [
  {
    title: "5 Methods to Increase Visibility Online", 
    text: "Praesent porta enim augue, et iaculis sem scelerisque id. Nulla sagittis fringilla imperdiet. Donec vestibulum leo a diam pharetra, vel ullamcorper mauris convallis.",
    name: "Jane Doe",
    avatar: woman
  },
  {
    title: "How To Gain More Customers In 5 Easy Steps", 
    text: "Praesent porta enim augue, et iaculis sem scelerisque id. Nulla sagittis fringilla imperdiet. Donec vestibulum leo a diam pharetra, vel ullamcorper mauris convallis.",
    name: "Jane Doe",
    avatar: woman
  },
  {
    title: "Free AI Tools That You Can Start Using Today", 
    text: "Praesent porta enim augue, et iaculis sem scelerisque id. Nulla sagittis fringilla imperdiet. Donec vestibulum leo a diam pharetra, vel ullamcorper mauris convallis.",
    name: "Jane Doe",
    avatar: woman
  },
]; 

export default data;