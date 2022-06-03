import awesome from '../assets/awesome-logo-smaller.webp';
import cool from '../assets/cool-brand-smaller.webp';
import international from '../assets/international-brand-smaller.webp';
import quality from '../assets/quality-brand-smaller.webp';
import known from '../assets/well-known-brand-smaller.webp';

interface BrandData {
  img: string
};

const data:BrandData[] = [
  {img: awesome},
  {img: cool},
  {img: known},
  {img: international},
  {img: quality }
]

export default data