import { v4 as uuidv4 } from 'uuid';

const inventory = [
  {
    name: 'Timber Gray Sofa',
    price: '1000',
    image: '../images/products/couch1.png',
    description: 'This is a Test Description',
    brand: 'Jason Bourne',
    currentInventory: 4,
    id: uuidv4(),
  },
  {
    name: 'Carmel Brown Sofa',
    price: '1000',
    image: '../images/products/couch5.png',
    description: 'This is a test description',
    brand: 'Jason Bourne',
    currentInventory: 2,
    id: uuidv4(),
  },
  {
    name: 'Mod Leather Sofa',
    price: '800',
    image: '../images/products/couch6.png',
    description:
      'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.',
    brand: 'Jason Bourne',
    currentInventory: 8,
    id: uuidv4(),
  },
  {
    name: 'Thetis Gray Love Seat',
    price: '900',
    image: '../images/products/couch7.png',
    description:
      'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskinthrow, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-inlook, like your favorite leather jacket.',
    brand: 'Jason Bourne',
    currentInventory: 10,
    id: uuidv4(),
  },
  {
    name: 'Sven Tan Matte',
    price: '1200',
    image: './images/products/couch8.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 7,
    id: uuidv4(),
  },
  {
    name: 'Otis Malt Sofa',
    price: '500',
    image: './images/products/couch9.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 13,
    id: uuidv4(),
  },
  {
    name: 'Ceni Brown 3 Seater',
    price: '650',
    image: '../images/products/couch10.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 9,
    id: uuidv4(),
  },
  {
    name: 'Jameson Jack Lounger',
    price: '1230',
    image: '../images/products/couch11.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 24,
    id: uuidv4(),
  },
  {
    name: 'Galaxy Blue Sofa',
    price: '800',
    image: '../images/products/couch2.png',
    description:
      'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.',
    brand: 'Jason Bourne',
    currentInventory: 43,
    id: uuidv4(),
  },
  {
    name: 'Markus Green Love Seat',
    price: '900',
    image: '../images/products/couch3.png',
    description:
      'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskinthrow, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-inlook, like your favorite leather jacket.',
    brand: 'Jason Bourne',
    currentInventory: 2,
    id: uuidv4(),
  },
  {
    name: 'Dabit Matte Black',
    price: '1200',
    image: '../images/products/couch4.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 14,
    id: uuidv4(),
  },
  {
    name: 'Embrace Blue',
    price: '300',
    image: '../images/products/chair1.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 12,
    id: uuidv4(),
  },
  {
    name: 'Nord Lounger',
    price: '825',
    image: './images/products/chair2.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 13,
    id: uuidv4(),
  },
  {
    name: 'Ceni Matte Oranve',
    price: '720',
    image: './images/products/chair3.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 33,
    id: uuidv4(),
  },
  {
    name: 'Abisko Green Recliner',
    price: '2000',
    image: './images/products/chair4.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 23,
    id: uuidv4(),
  },
  {
    name: 'Denim on Denim Single',
    price: '1100',
    image: './images/products/chair5.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 13,
    id: uuidv4(),
  },
  {
    name: 'Levo Tan Lounge Chair',
    price: '600',
    image: './images/products/chair6.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 15,
    id: uuidv4(),
  },
  {
    name: 'Anime Tint Recliner',
    price: '775',
    image: './images/products/chair7.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 44,
    id: uuidv4(),
  },
  {
    name: 'Josh Jones Red Chair',
    price: '1200',
    image: './images/products/chair8.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 17,
    id: uuidv4(),
  },
  {
    name: 'Black Sand Lounge',
    price: '1600',
    image: './images/products/chair9.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 28,
    id: uuidv4(),
  },
  {
    name: 'Mint Beige Workchair',
    price: '550',
    image: './images/products/chair10.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 31,
    id: uuidv4(),
  },
];

export { inventory };
