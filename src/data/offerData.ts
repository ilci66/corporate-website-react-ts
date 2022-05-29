import { faRocket,  faCode, faRobot, faGift, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface OfferData {
  title: string
  text: string
  detail: string
  icon: IconDefinition 
};

const data:OfferData[] = [
  {
    title: "We Are Fast",
    icon: faRocket,
    detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium eligendi assumenda deserunt ullam perspiciatis modi libero inventore earum voluptas iure?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab deserunt iste veritatis officia"    
  },
  {
    title: "Expert Developers",
    icon: faCode,
    detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium eligendi assumenda deserunt ullam perspiciatis modi libero inventore earum voluptas iure?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab deserunt iste veritatis officia"    
  },
  {
    title: "Lots of Promotions",
    icon: faGift,
    detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium eligendi assumenda deserunt ullam perspiciatis modi libero inventore earum voluptas iure?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab deserunt iste veritatis officia"    
  },
  {
    title: "Automize Your Growth",
    icon: faRobot,
    detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium eligendi assumenda deserunt ullam perspiciatis modi libero inventore earum voluptas iure?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab deserunt iste veritatis officia"    
  },
]

export default data