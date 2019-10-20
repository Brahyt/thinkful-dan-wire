const tinkeringStuff = [
  {
  title: 'Dolor perferendis.',
  liveLink: 'https://thinkful-ei-heron.github.io/bookmark-app-danielb/',
  githubLink: 'https://github.com/thinkful-ei-heron/bookmark-app-danielb',
  desc: 'Adipisicing inventore quo quasi obcaecati ducimus Perspiciatis consectetur ad quis quo dolor Accusamus quibusdam dolores eaque ex accusantium eos nesciunt Voluptate officia earum cupiditate nobis',
  preview: 'images/bookmarks.png',
  alt: 'Screenshot of the a bookmarking app that I made in Jquery and Javascript.'
  },
  {
  title: 'Dolor perferendis.',
  liveLink: 'https://thinkful-ei-heron.github.io/bookmark-app-danielb/',
  githubLink: 'https://github.com/thinkful-ei-heron/bookmark-app-danielb',
  desc: 'Adipisicing inventore quo quasi obcaecati ducimus Perspiciatis consectetur ad quis quo dolor Accusamus quibusdam dolores eaque ex accusantium eos nesciunt Voluptate officia earum cupiditate nobis',
  preview: 'images/bookmarks.png',
  alt: 'Screenshot of the a bookmarking app that I made in Jquery and Javascript.'
  },
  {
  title: 'Dolor perferendis.',
  liveLink: 'https://thinkful-ei-heron.github.io/bookmark-app-danielb/',
  githubLink: 'https://github.com/thinkful-ei-heron/bookmark-app-danielb',
  desc: 'Adipisicing inventore quo quasi obcaecati ducimus Perspiciatis consectetur ad quis quo dolor Accusamus quibusdam dolores eaque ex accusantium eos nesciunt Voluptate officia earum cupiditate nobis',
  preview: 'images/bookmarks.png',
  alt: 'Screenshot of the a bookmarking app that I made in Jquery and Javascript.'
  },
  {
  title: 'Dolor perferendis.',
  liveLink: 'https://thinkful-ei-heron.github.io/bookmark-app-danielb/',
  githubLink: 'https://github.com/thinkful-ei-heron/bookmark-app-danielb',
  desc: 'Adipisicing inventore quo quasi obcaecati ducimus Perspiciatis consectetur ad quis quo dolor Accusamus quibusdam dolores eaque ex accusantium eos nesciunt Voluptate officia earum cupiditate nobis',
  preview: 'images/bookmarks.png',
  alt: 'Screenshot of the a bookmarking app that I made in Jquery and Javascript.'
  },
  {
  title: 'Dolor perferendis.',
  liveLink: 'https://thinkful-ei-heron.github.io/bookmark-app-danielb/',
  githubLink: 'https://github.com/thinkful-ei-heron/bookmark-app-danielb',
  desc: 'Adipisicing inventore quo quasi obcaecati ducimus Perspiciatis consectetur ad quis quo dolor Accusamus quibusdam dolores eaque ex accusantium eos nesciunt Voluptate officia earum cupiditate nobis',
  preview: 'images/bookmarks.png',
  alt: 'Screenshot of the a bookmarking app that I made in Jquery and Javascript.'
  },
  {
  title: 'Dolor perferendis.',
  liveLink: 'https://thinkful-ei-heron.github.io/bookmark-app-danielb/',
  githubLink: 'https://github.com/thinkful-ei-heron/bookmark-app-danielb',
  desc: 'Adipisicing inventore quo quasi obcaecati ducimus Perspiciatis consectetur ad quis quo dolor Accusamus quibusdam dolores eaque ex accusantium eos nesciunt Voluptate officia earum cupiditate nobis',
  preview: 'images/bookmarks.png',
  alt: 'Screenshot of the a bookmarking app that I made in Jquery and Javascript.'
  },
  {
  title: 'Dolor perferendis.',
  liveLink: 'https://thinkful-ei-heron.github.io/bookmark-app-danielb/',
  githubLink: 'https://github.com/thinkful-ei-heron/bookmark-app-danielb',
  desc: 'Adipisicing inventore quo quasi obcaecati ducimus Perspiciatis consectetur ad quis quo dolor Accusamus quibusdam dolores eaque ex accusantium eos nesciunt Voluptate officia earum cupiditate nobis',
  preview: 'images/bookmarks.png',
  alt: 'Screenshot of the a bookmarking app that I made in Jquery and Javascript.'
  },
  {
  title: 'Dolor perferendis.',
  liveLink: 'https://thinkful-ei-heron.github.io/bookmark-app-danielb/',
  githubLink: 'https://github.com/thinkful-ei-heron/bookmark-app-danielb',
  desc: 'Adipisicing inventore quo quasi obcaecati ducimus Perspiciatis consectetur ad quis quo dolor Accusamus quibusdam dolores eaque ex accusantium eos nesciunt Voluptate officia earum cupiditate nobis',
  preview: 'images/bookmarks.png',
  alt: 'Screenshot of the a bookmarking app that I made in Jquery and Javascript.'
  }
]

const tinkerSnippit = function(tinkerObj) {
  return `
    <div class="tinker-item">
      <div>
        <img class="tinker-image" src="${tinkerObj.preview}" alt="${tinkerObj.alt}">
      </div>
      <div>
        <div class="tinker-title">
          <h4>${tinkerObj.title}</h4>
        </div>
        <div class="tinker-item-buttons">
          <a href="${tinkerObj.liveLink}" target="_blank"><button>Live!</button></a>
          <a href="${tinkerObj.githubLink}" target="_blank"><button>Repo</button></a>
        </div>
        <div class="tinker-disc">
          <p>${tinkerObj.desc}</p>
        </div>
      </div>
    </div>
  ` 
}

const generateTinkerSnippit = function() {
  let result = [];
  tinkeringStuff.forEach((obj) => {
    result.push(tinkerSnippit(obj));
  })
  return result.join('');
}

const populateTinkering = function() {
  const tinkerEntry = document.querySelector('.js-tinkering')
  console.log(tinkerEntry)
  tinkerEntry.innerHTML = generateTinkerSnippit()
}

export default {
  populateTinkering
}
