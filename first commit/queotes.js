const quotes = [
    {
        quote: "열 번을 실패하면 무엇을 해야 하는지 자연스럽게 깨닫게 됩니다.",
        author: "트레이시 디눈지오-타이탄의 도구들",
    },
    {
        quote: " 끈기가 없으면 성공할 수 없습니다..",
        author: "제임스 다이슨 자서전",
    }, 
    {
        quote: "버티면 좋은 아이디어,좋은 컨셉이 되지만 못 버티면 결국 실패가 됩니다.",
        author: "조수용 카카오 공동 대표",
    }, 
    {
        quote: ". 오리지널리티도 버텨야 만들어집니다.",
        author: "무라카미 하루키",
    },
    {
        quote: "열 번을 실패하면 무엇을 해야 하는지 자연스럽게 깨닫게 됩니다.",
        author: "트레이시 디눈지오-타이탄의 도구들",
    },
    {
        quote: "성공은 반복적 학습의 산물입니다",
        author: "말콤 글래드웰",
    },
    {
        quote: "포기하고 싶은 순간의 1분을 참아내야 그다음 문이 열립니다.",
        author: "김연아",
    },
    {
        quote: "기술 또한 무수히 많은 시간 동안 다듬어야 비로소 향상이 됩니다.",
        author: "안젤라 더크워스",
    }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuete = (quotes[Math.floor(Math.random() * quotes.length)]);
//Math.random 0~quotes.length 길이만큼의 랜덤숫자를 반환.

quote.innerText = todaysQuete.quote;
author.innerText = todaysQuete.author;