let currentQuestion = 0;

let answers = new Array(25).fill(null);

const questions = [

"在轻松的社交环境中（例如朋友聚会或聊天），当涉及性健康或亲密关系话题时，我会明显感到不自在或想回避。 / In casual social settings where sexual or relationship topics arise, I feel uncomfortable or try to withdraw.",

"当想到自身的性需求或性想法时，我容易产生羞耻或负罪感。 / When I become aware of my sexual thoughts, I feel guilt or shame.",

"如果需要向医生讨论性健康问题，我可能因为尴尬而拖延或避免就医。 / I may delay seeking medical help for sexual health due to embarrassment.",

"在学校或教育场景中讨论性教育时，我难以保持放松。 / During sexual education settings, I struggle to remain relaxed.",

"当别人表达开放的性态度时，我会产生内心不安。 / When others express open attitudes toward sexuality, I feel uneasy.",

"在可能发生亲密互动的情境中，我会提前产生紧张或焦虑。 / Anticipating intimacy makes me anxious.",

"即使在信任关系中，我也难以完全放松面对亲密行为。 / Even in trusted relationships, I struggle to relax in intimacy.",

"当别人关注我的身体时，我会明显紧张。 / Attention to my body makes me tense.",

"当需要表达自己的亲密需求时，我会感到压力。 / Expressing intimacy needs creates stress.",

"我会刻意避免涉及亲密互动的情境。 / I intentionally avoid intimate situations.",

"当别人讨论身体或性话题时，我通常沉默或回避。 / I stay silent or withdraw in sexual discussions.",

"我认为表达性需求通常是不恰当的。 / I believe sexual expression is often inappropriate.",

"我更倾向于压抑而不是表达亲密愿望。 / I suppress rather than express intimacy desires.",

"即使在安全关系中，我也难以讨论性需求。 / I struggle to discuss sexual needs even in safe relationships.",

"我认为性需求应该被严格控制。 / I believe sexual desires should be controlled.",

"我对自己的身体在亲密情境中感到不自在。 / I feel uncomfortable with my body in intimacy.",

"我不喜欢别人关注我的身体。 / I dislike attention toward my body.",

"在亲密互动中，我会感到拘谨或不自然。 / I feel stiff during intimacy.",

"我难以在亲密情境中保持自然。 / I struggle to remain natural in intimacy.",

"我会压抑与性相关的想法。 / I repress sexual thoughts.",

"我从小被教育避免性话题。 / I was taught to avoid sexual topics.",

"我认为性表达通常不合适。 / Sexual expression feels improper.",

"我觉得性需求令人尴尬。 / Sexual needs feel embarrassing.",

"我难以表达亲密情感。 / I find expressing intimacy difficult.",

"我会避免可能涉及身体亲密的环境。 / I avoid environments involving physical closeness."

];

function renderQuestion(){

let q = questions[currentQuestion];

let progress = ((currentQuestion)/questions.length)*100;

document.getElementById("progress-bar").style.width = progress+"%";

document.getElementById("question-card").innerHTML = `

<div class="question">

Q${currentQuestion+1}. ${q}

</div>

<div class="options">

<label>
<input type="radio" name="option" value="1">
非常不同意 Strongly Disagree
</label>

<label>
<input type="radio" name="option" value="2">
不同意 Disagree
</label>

<label>
<input type="radio" name="option" value="3">
中立 Neutral
</label>

<label>
<input type="radio" name="option" value="4">
同意 Agree
</label>

<label>
<input type="radio" name="option" value="5">
非常同意 Strongly Agree
</label>

</div>

`;

}

function nextQuestion(){

let selected = document.querySelector('input[name="option"]:checked');

if(!selected){

alert("Please select an option 请先选择一个选项");

return;

}

answers[currentQuestion] = parseInt(selected.value);

currentQuestion++;

if(currentQuestion>=questions.length){

finishTest();
return;

}

renderQuestion();

}

function prevQuestion(){

if(currentQuestion>0){

currentQuestion--;
renderQuestion();

}

}

function finishTest(){

let total = answers.reduce((a,b)=>a+b,0);

localStorage.setItem("sri_total",total);

window.location.href="result.html";

}

renderQuestion();