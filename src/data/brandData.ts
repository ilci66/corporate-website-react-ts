import awesome from '../assets/awesome-logo-smaller.webp';
import cool from '../assets/cool-brand-smaller.webp';
import international from '../assets/international-brand-smaller.webp';
import quality from '../assets/quality-brand-smaller.webp';
import known from '../assets/well-known-brand-smaller.webp';

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