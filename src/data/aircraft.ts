export interface Aircraft {
  id: string;
  name: string;
  manufacturer: string;
  type: 'passenger' | 'cargo' | 'mixed';
  category: 'narrow-body' | 'wide-body' | 'regional';
  image: string;
  specs: {
    length: string;
    wingspan: string;
    height: string;
    maxSpeed: string;
    range: string;
    maxAltitude: string;
    engines: string;
    seating: {
      economy: number;
      business?: number;
      first?: number;
      total: number;
    };
    maxTakeoffWeight: string;
    fuelCapacity: string;
  };
  description: string;
  yearIntroduced: number;
  status: 'active' | 'discontinued';
}

export const aircraftData: Aircraft[] = [
  {
    id: 'boeing-737-max',
    name: 'Boeing 737 MAX',
    manufacturer: 'Boeing',
    type: 'passenger',
    category: 'narrow-body',
    image: '/images/boeing-737-max.jpg',
    specs: {
      length: '39.5m (129ft 8in)',
      wingspan: '35.9m (117ft 10in)',
      height: '12.3m (40ft 4in)',
      maxSpeed: 'Mach 0.82 (876 km/h)',
      range: '6,510 km (3,515 nmi)',
      maxAltitude: '41,000 ft (12,500 m)',
      engines: '2x CFM International LEAP-1B',
      seating: {
        economy: 162,
        business: 16,
        first: 8,
        total: 186
      },
      maxTakeoffWeight: '88,314 kg (194,700 lb)',
      fuelCapacity: '25,816 L (6,820 US gal)'
    },
    description: 'The Boeing 737 MAX is the fourth generation of the Boeing 737, featuring new LEAP-1B engines and aerodynamic improvements for better fuel efficiency.',
    yearIntroduced: 2017,
    status: 'active'
  },
  {
    id: 'airbus-a320neo',
    name: 'Airbus A320neo',
    manufacturer: 'Airbus',
    type: 'passenger',
    category: 'narrow-body',
    image: '/images/airbus-a320neo.jpg',
    specs: {
      length: '37.57m (123ft 3in)',
      wingspan: '35.8m (117ft 5in)',
      height: '11.76m (38ft 7in)',
      maxSpeed: 'Mach 0.82 (828 km/h)',
      range: '6,500 km (3,500 nmi)',
      maxAltitude: '39,800 ft (12,130 m)',
      engines: '2x CFM LEAP-1A or Pratt & Whitney PW1100G',
      seating: {
        economy: 150,
        business: 20,
        total: 170
      },
      maxTakeoffWeight: '79,000 kg (174,000 lb)',
      fuelCapacity: '24,210 L (6,400 US gal)'
    },
    description: 'The Airbus A320neo (new engine option) is an improved version of the A320 family with new engines and winglets for enhanced efficiency.',
    yearIntroduced: 2016,
    status: 'active'
  },
  {
    id: 'boeing-787-dreamliner',
    name: 'Boeing 787 Dreamliner',
    manufacturer: 'Boeing',
    type: 'passenger',
    category: 'wide-body',
    image: '/images/boeing-787-dreamliner.jpg',
    specs: {
      length: '57m (186ft 1in)',
      wingspan: '60.1m (197ft 3in)',
      height: '16.9m (55ft 6in)',
      maxSpeed: 'Mach 0.85 (913 km/h)',
      range: '13,620 km (7,355 nmi)',
      maxAltitude: '43,000 ft (13,100 m)',
      engines: '2x General Electric GEnx or Rolls-Royce Trent 1000',
      seating: {
        economy: 242,
        business: 24,
        first: 6,
        total: 272
      },
      maxTakeoffWeight: '254,011 kg (560,000 lb)',
      fuelCapacity: '126,206 L (33,340 US gal)'
    },
    description: 'The Boeing 787 Dreamliner is a revolutionary wide-body aircraft featuring composite materials, advanced aerodynamics, and improved passenger comfort.',
    yearIntroduced: 2011,
    status: 'active'
  },
  {
    id: 'airbus-a350-xwb',
    name: 'Airbus A350 XWB',
    manufacturer: 'Airbus',
    type: 'passenger',
    category: 'wide-body',
    image: '/images/airbus-a350-xwb.jpg',
    specs: {
      length: '66.8m (219ft 2in)',
      wingspan: '64.75m (212ft 5in)',
      height: '17.05m (55ft 11in)',
      maxSpeed: 'Mach 0.89 (945 km/h)',
      range: '15,000 km (8,100 nmi)',
      maxAltitude: '43,100 ft (13,100 m)',
      engines: '2x Rolls-Royce Trent XWB',
      seating: {
        economy: 325,
        business: 36,
        first: 4,
        total: 365
      },
      maxTakeoffWeight: '280,000 kg (617,300 lb)',
      fuelCapacity: '141,000 L (37,300 US gal)'
    },
    description: 'The Airbus A350 XWB (Extra Wide Body) is Airbus\'s newest wide-body aircraft, featuring advanced aerodynamics and composite materials.',
    yearIntroduced: 2014,
    status: 'active'
  },
  {
    id: 'boeing-777x',
    name: 'Boeing 777X',
    manufacturer: 'Boeing',
    type: 'passenger',
    category: 'wide-body',
    image: '/images/boeing-777x.jpg',
    specs: {
      length: '76.7m (251ft 9in)',
      wingspan: '71.8m (235ft 6in)',
      height: '19.7m (64ft 7in)',
      maxSpeed: 'Mach 0.87 (945 km/h)',
      range: '16,170 km (8,730 nmi)',
      maxAltitude: '43,100 ft (13,100 m)',
      engines: '2x General Electric GE9X',
      seating: {
        economy: 384,
        business: 42,
        first: 6,
        total: 432
      },
      maxTakeoffWeight: '351,534 kg (775,000 lb)',
      fuelCapacity: '197,977 L (52,300 US gal)'
    },
    description: 'The Boeing 777X is the latest generation of the 777 family, featuring the largest commercial jet engines ever built and folding wingtips.',
    yearIntroduced: 2020,
    status: 'active'
  },
  {
    id: 'airbus-a220',
    name: 'Airbus A220',
    manufacturer: 'Airbus',
    type: 'passenger',
    category: 'narrow-body',
    image: '/images/airbus-a220.jpg',
    specs: {
      length: '35.1m (115ft 1in)',
      wingspan: '35.1m (115ft 1in)',
      height: '11.5m (37ft 9in)',
      maxSpeed: 'Mach 0.82 (828 km/h)',
      range: '6,297 km (3,400 nmi)',
      maxAltitude: '41,000 ft (12,500 m)',
      engines: '2x Pratt & Whitney PW1500G',
      seating: {
        economy: 108,
        business: 12,
        total: 120
      },
      maxTakeoffWeight: '69,900 kg (154,100 lb)',
      fuelCapacity: '21,918 L (5,790 US gal)'
    },
    description: 'The Airbus A220 is a family of narrow-body, twin-engine, medium-range jet airliners designed for 100-150 seat markets.',
    yearIntroduced: 2016,
    status: 'active'
  }
];

export const getAircraftById = (id: string): Aircraft | undefined => {
  return aircraftData.find(aircraft => aircraft.id === id);
};

export const getAircraftByManufacturer = (manufacturer: string): Aircraft[] => {
  return aircraftData.filter(aircraft => 
    aircraft.manufacturer.toLowerCase().includes(manufacturer.toLowerCase())
  );
};

export const getAircraftByCategory = (category: string): Aircraft[] => {
  return aircraftData.filter(aircraft => aircraft.category === category);
}; 