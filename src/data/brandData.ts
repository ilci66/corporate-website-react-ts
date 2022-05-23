import awesome from '../assets/awesome-logo.png';
import cool from '../assets/cool-brand.png';
import international from '../assets/international-brand.png';
import quality from '../assets/quality-brand.png';
import known from '../assets/well-known-brand.png';

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