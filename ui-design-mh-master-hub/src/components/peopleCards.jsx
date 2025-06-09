
import { useState } from 'react';
import { IoArrowUndoCircle, IoCodeSlash, IoDocumentTextSharp, IoWalkSharp } from 'react-icons/io5';
import { IoMdGitMerge } from 'react-icons/io';
import { FaPenRuler } from 'react-icons/fa6';
import { BiLogoNodejs } from 'react-icons/bi';
import { CiStar } from 'react-icons/ci';
import img4 from '../image/010.png';
import img5 from '../image/020.png';
import img6 from '../image/030.png';
import img7 from '../image/040.png';
import img8 from '../image/050.png';
import img9 from '../image/060.png';

const peopleData = [
  { id: 1, category: 'developer', name: 'Zrand Hobs', role: 'Developer', rating: '4.8 (6)', skills: ['Glimp', 'Wordpress'], img: img4 },
  { id: 2, category: 'developer', name: 'Dorothy Wood', role: 'Developer', rating: '4.8 (6)', skills: ['Elementor', 'Wix', 'Illustrator'], img: img5 },
  { id: 3, category: 'uidesign', name: 'Timothy Baker', role: 'Teacher', rating: '4.8 (6)', skills: ['Figma', 'Elementor', 'Wordpress'], img: img6 },
  { id: 4, category: 'uidesign', name: 'Shane Pratt', role: 'Developer', rating: '4.8 (6)', skills: ['Figma', 'Wordpress', 'Gimp'], img: img7 },
  { id: 5, category: 'projectmanager', name: 'Frances Washing', role: 'Developer', rating: '4.8 (6)', skills: ['Wordpress', 'Wix', 'Illustrator'], img: img8 },
  { id: 6, category: 'projectmanager', name: 'Jason Bell', role: 'Web Designer', rating: '4.8 (6)', skills: ['Elementor', 'Wordpress'], img: img9 },
  { id: 7, category: 'designer', name: 'Zrand Hobs', role: 'Developer', rating: '4.8 (6)', skills: ['Glimp', 'Wordpress'], img: img4 },
  { id: 8, category: 'designer', name: 'Dorothy Wood', role: 'Developer', rating: '4.8 (6)', skills: ['Elementor', 'Wix', 'Illustrator'], img: img5 },
  { id: 9, category: 'designer', name: 'Timothy Baker', role: 'Teacher', rating: '4.8 (6)', skills: ['Figma', 'Elementor', 'Wordpress'], img: img6 },
  { id: 10, category: 'accountant', name: 'Shane Pratt', role: 'Developer', rating: '4.8 (6)', skills: ['Figma', 'Wordpress', 'Gimp'], img: img7 },
  { id: 11, category: 'accountant', name: 'Frances Washing', role: 'Developer', rating: '4.8 (6)', skills: ['Wordpress', 'Wix', 'Illustrator'], img: img8 },
  { id: 12, category: 'humanresource', name: 'Jason Bell', role: 'Web Designer', rating: '4.8 (6)', skills: ['Elementor', 'Wordpress'], img: img9 },
];

const buttons = [
  { category: 'all', label: 'All', icon: IoArrowUndoCircle },
  { category: 'developer', label: 'Developer', icon: IoCodeSlash },
  { category: 'uidesign', label: 'UI Designer', icon: BiLogoNodejs },
  { category: 'projectmanager', label: 'Project Manager', icon: IoMdGitMerge },
  { category: 'designer', label: 'Designer', icon: FaPenRuler },
  { category: 'accountant', label: 'Accountant', icon: IoDocumentTextSharp },
  { category: 'humanresource', label: 'Human Resource', icon: IoWalkSharp },
];

function PeopleCards() {

  const [filter, setFilter] = useState('all');

  const filteredPeople = [];

  if (filter === 'all') {
    for (let i = 0; i < peopleData.length; i++) {
      filteredPeople.push(peopleData[i]);
    }
  } else {
    for (let i = 0; i < peopleData.length; i++) {
      if (peopleData[i].category === filter) {
        filteredPeople.push(peopleData[i]);
      }
    }
  }

  // Generate filter buttons
  const buttonElements = [];
  for (let i = 0; i < buttons.length; i++) {
    const { category, label, icon: Icon } = buttons[i];

    buttonElements.push(
      <button
        key={category}
        className={`rounded-lg border-2 p-2 flex items-center justify-center text-sm sm:text-base transition ${
          filter === category ? 'bg-gray-600 text-white' : 'bg-white hover:bg-gray-100'
        }`}
        onClick={() => setFilter(category)}
      >
        <Icon className="text-xl sm:text-2xl mr-1" />
        {label}
      </button>
    );
  }

  // Generate cards
  const cardElements = [];
  for (let i = 0; i < filteredPeople.length; i++) {
    const { id, name, role, rating, skills, img } = filteredPeople[i];
    
    // adding skills
    const skillElements = [];
    for (let j = 0; j < skills.length; j++) {
      skillElements.push(
        <span key={`${id}-${skills[j]}`} className="rounded-2xl border py-1 px-3 text-sm">
          {skills[j]}
        </span>
      );
    }

    cardElements.push(
      <div key={id} className="text-center w-full sm:w-[30%] p-4 shadow-xl rounded-lg">
        <div className="flex justify-center">
          <img src={img} className="rounded-3xl w-24 h-24 object-cover" alt={name} />
        </div>
        <div className="flex justify-center mt-3">
          <p className="flex items-center text-sm sm:text-base">
            <CiStar className="text-yellow-500 text-xl sm:text-2xl" /> {rating}
          </p>
        </div>
        <h1 className="text-xl sm:text-2xl mt-3 font-semibold">{name}</h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">{role}</p>
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {skillElements}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 mb-8 text-center px-4">

      {/* Description */}
      <h1 className="text-3xl sm:text-4xl font-bold">
        Discover the <br /> Emerging Masters
      </h1>
      <p className="mt-4 text-sm sm:text-base">
        Find the best master for your company and boost<br /> your business 10x!
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-8 text-gray-500 sm:px-10">
        {buttonElements}
      </div>

      {/* master Cards */}
      <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-5 justify-center px-4 sm:px-10">
        {cardElements}
      </div>
    </div>
  );
}

export default PeopleCards;