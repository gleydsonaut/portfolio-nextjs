const fs = require('fs');
const files = [
  'app/page.tsx',
  'components/projects.tsx',
  'components/skills.tsx',
  'components/services.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/className="py-24"/g, 'className="py-16 md:py-24"');
  content = content.replace(/className="py-24 /g, 'className="py-16 md:py-24 ');
  content = content.replace(/pt-32 pb-20/g, 'pt-28 pb-16 md:pt-32 md:pb-20');
  content = content.replace(/text-4xl lg:text-6xl/g, 'text-4xl md:text-5xl lg:text-6xl');
  content = content.replace(/gap-12/g, 'gap-8 md:gap-12');
  fs.writeFileSync(f, content, 'utf8');
});
console.log('Mobile optimizations applied.');
