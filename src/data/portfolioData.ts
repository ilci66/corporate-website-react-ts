import mechanic from '../assets/black-white-mechanic-smaller.jpg';
import view from '../assets/blue-red-view-smaller.jpg';
import flower from '../assets/flower-blue-smaller.jpg';
import lines from '../assets/lines-orange-white-smaller.jpg';
import neuron from '../assets/neuron-smaller.jpg';
import tree from '../assets/tree-green.jpg';
import map from '../assets/map-pins-smaller.jpg';

interface PortfolioData {
    img: string
    alt: string
    cols: string
    link: string
};

const data:PortfolioData[] = [
    {img: mechanic, alt: "some cool company", cols: "4", link: "#"},
    {img: view, alt: "some cool company", cols: "4", link: "#"},
    {img: map, alt: "some cool company", cols: "4", link: "#"},
    {img: lines, alt: "some cool company", cols: "5", link: "#"},
    {img: flower, alt: "some cool company", cols: "7", link: "#"},
    {img: neuron, alt: "some cool company", cols: "6", link: "#"},
    {img: tree, alt: "some cool company", cols: "6", link: "#"}
]

export default data