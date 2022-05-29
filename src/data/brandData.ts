import awesome from '../assets/awesome-logo-smaller.jpg';
import cool from '../assets/cool-brand-smaller.jpg';
import international from '../assets/international-brand-smaller.jpg';
import quality from '../assets/quality-brand-smaller.jpg';
import known from '../assets/well-known-brand-smaller.jpg';

interface BrandData {
  img: string
  text: string
};

const data:BrandData[] = [
  {img: awesome,  text: "Awesome Brand" },
  {img: cool,  text: "Cool Brand" },
  {img: known,  text: "Well Known Brand" },
  {img: international,  text: "International Brand" },
  {img: quality,  text: "Quality Brand" }
]

export default data