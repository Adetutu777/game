
let idul = document.getElementById('idul');
(butty = document.getElementById('butty')),
  (quizBox = document.getElementById('questionAll')),
  (answerSection = document.querySelector('.choice')),
  (reloadBtn = document.querySelector('#reload')),
  (ch1 = document.getElementById('ch1')),
  (ch2 = document.getElementById('ch2')),
  (ch3 = document.getElementById('ch3')),
  (ch4 = document.getElementById('ch4')),
  (questionUpdate = document.querySelector('.answered'));
score = 0;
numscore = 1;
let reloadFunc = () => {
  location.reload();
};
let click = {
  questions: [
    {
      q: 'What is the diameter of our Earth?',
      options: ['12,742', '12,842', '11,742', '12,743'],
      answers: 0,
    },

    {
      q: 'Which is the largest continent of the world?',
      options: ['Africa', 'Ethopia', 'Asia', 'None of the above'],
      answers: 2,
    },

    {
      q: 'Which state is the Empire State?',
      options: ['New York', 'New Jersey', 'England', 'Australia'],
      answers: 0,
    },

    {
      q: 'Which is the largest Dam of the world?',
      options: ['Tarbela', 'Hirakud', 'Ataturk', 'Three Gorges'],
      answers: 3,
    },

    {
      q: 'How many bones are there in the human body?',
      options: ['206', '208', '207', '106'],
      answers: 0,
    },
  ],

  index: 0,
  load: function () {
    if (this.index <= this.questions.length + 1) {
      // if (numscore == 5) {
      //   butty.innerText = 'Get Results';
      // }
      let finishQuiz = [];
      if (this.questions[this.index] === undefined) {
        quizBox.innerHTML = 'quiz over!!';
        butty.style.display = 'none';
        reloadBtn.style.display = 'block';
        answerSection.innerHTML = 'Your total score is' + score + 'out of 100';
      }
      quizBox.innerHTML = this.questions[this.index].q;
      ch1.innerHTML = this.questions[this.index].options[0];
      ch2.innerHTML = this.questions[this.index].options[1];
      ch3.innerHTML = this.questions[this.index].options[2];
      ch4.innerHTML = this.questions[this.index].options[3];
    } else {
      // if (numscore + 1 >= 5) {
      //   quizBox.innerHTML = 'quiz over!!';
      // }
      // quizBox.innerHTML = 'quiz over!!';
      ch1.style.display = none;
      ch2.style.display = none;
      ch3.style.display = none;
      ch4.style.display = none;
      butty.style.display = none;
    }
  },
  next: function () {
    numscore += 1;
    this.index++;
    console.log(this.index);
    this.load();

    questionUpdate.innerHTML = numscore;
  },

  check: function (ele) {
    let id = ele.id.split(' ');

    let myArray = [];

    if (id[0] == 'ch1') {
      myArray.push(this.questions[this.index].options[0]);
    } else if (id[0] == 'ch1') {
      myArray.push(this.questions[this.index].options[0]);
    } else if (id[0] == 'ch2') {
      myArray.push(this.questions[this.index].options[1]);
    } else if (id[0] == 'ch3') {
      myArray.push(this.questions[this.index].options[2]);
    } else if (id[0] == 'ch4') {
      myArray.push(this.questions[this.index].options[3]);
    } else {
      myArray.push('');
    }

    let newValue = myArray[0];

    let status = this.questions[this.index].options.indexOf(newValue);

    if (status == this.questions[this.index].answers) {
      score += 10;
      ele.className = 'correct';
      // ele.innerHTML = score;
      myArray = [];
    } else {
      ele.className = 'wrong';
      //   ele.innerHTML = 'wrong';
      myArray = [];
    }

    if (numscore == 5) {
      butty.innerText = 'Get Results';
    }
    const scoreTrack = document.querySelector('#scoreBoard');
    scoreTrack.innerHTML = score;
  },
  notClickAble: function () {
    for (let i = 0; i < idul.children.length; i++) {
      idul.children[i].style.pointerEvents = 'none';
    }
  },

  clickAble: function () {
    for (let i = 0; i < idul.children.length; i++) {
      idul.children[i].style.pointerEvents = 'auto';
      idul.children[i].className = ' ';
    }
  },
};

window.onload = click.load();

function button(ele) {
  click.check(ele);
  click.notClickAble();
}

function next() {
  click.next();
  click.clickAble();
}
