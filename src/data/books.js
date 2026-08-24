import dirtySnowmanCover from '../assets/dirty-snowman.jpeg';
import foloppyCover from '../assets/foloppy.jpeg';
import peekCover from '../assets/peek.jpeg';

export const books = [
  {
    id: 'dirty-snowman',
    title: 'The Dirty Snowman',
    author: 'C. W. Sparklet',
    format: 'Paperback',
    amazonUrl: 'https://www.amazon.com/-/zh_TW/C-W-Sparklet/dp/1681391635',
    description: 'The Dirty Snowman is about a snowman who loses confidence after becoming dirty and worries that the boys who created him will no longer like him. During his journey through the town of Tissmini, a very little snow girl helps him discover that he is wonderful just as he is.',
    themes: ['Acceptance', 'Confidence', 'Kindness', 'Bullying'],
    rating: '5.0 ★',
    ctaText: 'View on Amazon',
    cover: dirtySnowmanCover,
    featuredText: 'A story about being accepted exactly as you are.',
    longDescription: 'Through the journey of a snowman who feels different after becoming dirty, children discover an important lesson about self-worth, kindness, acceptance, and the harm caused by judging others by appearances.',
    quote: 'We all must be taught and accepted as we are — not by what people want us to be.'
  },
  {
    id: 'mr-foloppy',
    title: 'Mr. Foloppy and His Floppy Hat',
    author: 'C. W. Sparklet',
    format: 'Kindle Edition',
    amazonUrl: 'https://www.amazon.com/Mr-Foloppy-His-Floppy-Hat-ebook/dp/B0HFSWJ4SJ/',
    description: 'Mr. Foloppy and His Floppy Hat is a playful story designed to help children explore the concept of memory through observation and open-ended questions. Teachers can use the story to encourage children to notice colors, shapes, details, and the world around them.',
    themes: ['Memory', 'Observation', 'Learning', 'Classroom'],
    rating: null,
    ctaText: 'Read on Amazon',
    cover: foloppyCover,
    featuredText: 'An interactive exploration of observation and memory.',
    longDescription: 'A delightful classroom favorite that invites children to actively engage with the illustration details, helping them train memory retention and color-shape matching while answering playful, curious prompts.',
    quote: 'Memory is a path we build by noticing the bright, small details in the world around us.'
  },
  {
    id: 'peek-forgotten-book',
    title: '"Peek" the Forgotten Book',
    author: 'C. W. Sparklet',
    format: 'Kindle Edition',
    amazonUrl: 'https://www.amazon.com/Peek-Forgotten-Book-C-Sparklet-ebook/dp/B08NFL5H84/',
    description: '"Peek" the Forgotten Book tells the story of a book that feels forgotten in a world increasingly dominated by technology. Waiting quietly on a shelf, Peek wonders whether anyone will ever open her pages again. The story celebrates the timeless magic of real books and reminds young readers that books don\'t need electricity to bring stories to life.',
    themes: ['Reading', 'Imagination', 'Technology', 'Books'],
    rating: '5.0 ★',
    ctaText: 'Read on Amazon',
    cover: peekCover,
    featuredText: 'Celebrating the timeless magic of physical pages.',
    longDescription: 'In an era of screens and digital noise, this narrative reconnects children to the tactile joy of holding a physical book, showing how imagination turns empty pages into portals of infinite adventure.',
    quote: 'Real books don\'t need electricity to bring stories to life.'
  }
];
