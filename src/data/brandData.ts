import mechanic from '../assets/black-white-mechanic.jpg';
import view from '../assets/blue-red-view.jpg';
import flower from '../assets/flower-blue.jpg';
import lines from '../assets/lines-orange-white.jpg';
import neuron from '../assets/neuron.jpg';

interface BrandData {
  img: string
  text: string
};

const data:BrandData[] = [
  {img: mechanic,  text: "Awesome Brand" },
  {img: view,  text: "Cool Brand" },
  {img: lines,  text: "Well Known Brand" },
  {img: flower,  text: "International Brand" },
  {img: neuron,  text: "Quality Brand" }
]

export default data