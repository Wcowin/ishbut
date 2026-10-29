import { mkdir, writeFile } from 'node:fs/promises';
import { navigation, profileSource, home, research, awards, patents, students, services, papersPage } from '../src/content.mjs';
const pages = {'/':home,'/research/':research,'/awards/':awards,'/publication/':papersPage(),'/patents/':patents,'/teaching/':students,'/services/':services};
for(const [path,content] of Object.entries(pages)){
 const title=navigation.find(n=>n[1]===path)[0];
 const nav=navigation.map(([name,url])=>`<a href="${url}"${url===path?' class="active" aria-current="page"':''}>${name}</a>`).join('');
 const html=`<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | Mingwu Zhang | Hubei University of Technology</title><meta name="description" content="${title} — Professor Mingwu Zhang, School of Computer Science and Artificial Intelligence, Hubei University of Technology. Cryptography, data security, privacy and AI security."><meta name="theme-color" content="#20466f"><link rel="icon" type="image/png" href="/assets/hbut-seal.png"><link rel="stylesheet" href="/src/style.css"><script type="module" src="/src/main.js"></script></head>
<body><a class="skip-link" href="#main">Skip to content</a>
<header class="site-header"><div class="header-inner"><a class="university-brand" href="https://en.hbut.edu.cn/" target="_blank" rel="noopener" aria-label="Hubei University of Technology website"><img src="/assets/hbut-seal.png" alt="HBUT seal" width="48" height="48"><span class="university-name">HUBEI UNIVERSITY<br>OF TECHNOLOGY<span class="university-abbr">HBUT · EST. 1952</span></span></a><a class="school-brand" href="https://scs.hbut.edu.cn/" target="_blank" rel="noopener">School of Computer Science<br>and Artificial Intelligence</a><button class="menu-toggle" aria-label="Open navigation" aria-controls="main-nav" aria-expanded="false"><span></span><span></span><span></span></button><nav id="main-nav" aria-label="Main navigation">${nav}</nav></div></header>
<main id="main" class="page ${path==='/'?'home-page':'inner-page'}">${content}</main>
<footer class="site-footer"><p>Copyright © ${new Date().getFullYear()} | Mingwu ZHANG</p><p class="footer-affiliation">Hubei University of Technology</p><nav aria-label="Footer navigation">${nav}</nav><a class="provenance" href="${profileSource}" target="_blank" rel="noopener">University faculty profile ↗</a></footer><a class="back-to-top" href="#main" aria-label="Back to top" hidden>↑</a></body></html>`;
 // Keep navigation and public assets within the site when hosted at /ishbut/.
 const prefix=path==='/'?'./':'../';
 const portableHtml=html.replace(/\b(href|src)="\/(?!\/)([^"]*)"/g,(_,attr,target)=>`${attr}="${prefix}${target}"`);
 const dir=path==='/'?'.':path.slice(1,-1);await mkdir(dir,{recursive:true});await writeFile(`${dir}/index.html`,portableHtml);
}
console.log('Generated 7 English pages.');
