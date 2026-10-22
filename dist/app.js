const marketData = {
  sale: {
    label: '매매', index: '103.8', indexChange: '▲ 0.7%', median: '3.42억', medianUnit: '전용 84㎡ 기준', medianChange: '▲ 2.1%', volume: '186건', volumeChange: '▼ 4.6%', py: '1,108만', pyChange: '▲ 1.3%', unit: '단위: 억원',
    indices: [100,100.1,100.3,100.6,100.8,101.0,100.9,101.2,101.5,101.6,101.9,102.1,102.4,102.3,102.5,102.8,102.9,103.1,103.4,103.3,103.5,103.8],
    changes: [.1,.2,.3,.2,.2,-.1,.3,.3,.1,.3,.2,.3,-.1,.2,.3,.1,.2,.3,-.1,.2,.3,.3],
    narrative: '완만한 회복세 · 최근 6개월 +2.8', volumeBars: [142,158,171,165,193,201,186,178,214,206,195,186],
    top: [
      ['경주 뉴센트로 에일린의 뜰','황성동','5.85억','84㎡','황성·용강권'],['힐스테이트 황성','황성동','5.42억','84㎡','황성·용강권'],['KTX신경주역 더메트로 줌파크','건천읍','4.91억','84㎡','서부권'],['용황협성휴포레','용강동','4.76억','84㎡','황성·용강권'],['현곡푸르지오','현곡면','4.62억','84㎡','현곡권'],['협성휴포레 황성','황성동','4.48억','84㎡','황성·용강권'],['경주센트럴푸르지오','현곡면','4.35억','84㎡','현곡권'],['두산위브트레지움','용강동','4.21억','84㎡','황성·용강권'],['e편한세상 황성','황성동','4.06억','84㎡','황성·용강권'],['경주외동 미소지움','외동읍','3.88억','84㎡','외동권']
    ],
    pyTop: [['힐스테이트 황성','황성동','1,628만','84㎡','황성·용강권'],['경주 뉴센트로 에일린의 뜰','황성동','1,590만','84㎡','황성·용강권'],['용황협성휴포레','용강동','1,476만','84㎡','황성·용강권'],['현곡푸르지오','현곡면','1,422만','84㎡','현곡권'],['KTX신경주역 더메트로 줌파크','건천읍','1,389만','84㎡','서부권'],['두산위브트레지움','용강동','1,351만','84㎡','황성·용강권'],['협성휴포레 황성','황성동','1,318만','84㎡','황성·용강권'],['경주센트럴푸르지오','현곡면','1,289만','84㎡','현곡권'],['e편한세상 황성','황성동','1,246만','84㎡','황성·용강권'],['경주외동 미소지움','외동읍','1,180만','84㎡','외동권']]
  },
  jeonse: {
    label: '전세', index: '102.4', indexChange: '▲ 0.4%', median: '2.28억', medianUnit: '전용 84㎡ 보증금', medianChange: '▲ 0.8%', volume: '121건', volumeChange: '▲ 6.1%', py: '738만', pyChange: '▲ 0.5%', unit: '단위: 억원',
    indices: [100,100,100.1,100.2,100.3,100.2,100.4,100.5,100.7,100.8,100.7,100.9,101,101.2,101.3,101.2,101.4,101.6,101.8,102,102.1,102.4], changes: [0,.1,.1,.1,-.1,.2,.1,.2,.1,-.1,.2,.1,.2,.1,-.1,.2,.2,.2,.2,.1,.3], narrative: '수요 견조 · 최근 6개월 +1.2', volumeBars: [88,93,101,95,108,114,109,105,118,126,114,121],
    top: [['힐스테이트 황성','황성동','3.65억','84㎡','황성·용강권'],['경주 뉴센트로 에일린의 뜰','황성동','3.50억','84㎡','황성·용강권'],['용황협성휴포레','용강동','3.20억','84㎡','황성·용강권'],['현곡푸르지오','현곡면','3.05억','84㎡','현곡권'],['두산위브트레지움','용강동','2.95억','84㎡','황성·용강권'],['KTX신경주역 더메트로 줌파크','건천읍','2.88억','84㎡','서부권'],['협성휴포레 황성','황성동','2.78억','84㎡','황성·용강권'],['경주센트럴푸르지오','현곡면','2.65억','84㎡','현곡권'],['e편한세상 황성','황성동','2.55억','84㎡','황성·용강권'],['경주외동 미소지움','외동읍','2.38억','84㎡','외동권']],
    pyTop: [['힐스테이트 황성','황성동','1,074만','84㎡','황성·용강권'],['경주 뉴센트로 에일린의 뜰','황성동','1,029만','84㎡','황성·용강권'],['용황협성휴포레','용강동','941만','84㎡','황성·용강권'],['현곡푸르지오','현곡면','897만','84㎡','현곡권'],['두산위브트레지움','용강동','868만','84㎡','황성·용강권'],['KTX신경주역 더메트로 줌파크','건천읍','847만','84㎡','서부권'],['협성휴포레 황성','황성동','818만','84㎡','황성·용강권'],['경주센트럴푸르지오','현곡면','779만','84㎡','현곡권'],['e편한세상 황성','황성동','750만','84㎡','황성·용강권'],['경주외동 미소지움','외동읍','700만','84㎡','외동권']]
  },
  monthly: {
    label: '월세', index: '106.1', indexChange: '▲ 1.2%', median: '1,000/78만', medianUnit: '보증금 / 월세', medianChange: '▲ 3.4%', volume: '94건', volumeChange: '▲ 8.0%', py: '42만', pyChange: '▲ 1.7%', unit: '단위: 보증금/월세',
    indices: [100,100.2,100.4,100.8,101.1,101.4,101.7,102,102.4,102.8,103.2,103.4,103.8,104,104.3,104.6,104.9,105.1,105.4,105.6,105.9,106.1], changes: [.2,.2,.4,.3,.3,.3,.3,.4,.4,.4,.2,.4,.2,.3,.3,.3,.2,.3,.2,.3,.2], narrative: '월세 선호 확대 · 최근 6개월 +1.5', volumeBars: [61,68,73,70,76,81,79,86,91,88,87,94],
    top: [['힐스테이트 황성','황성동','5,000/145만','84㎡','황성·용강권'],['경주 뉴센트로 에일린의 뜰','황성동','3,000/135만','84㎡','황성·용강권'],['용황협성휴포레','용강동','3,000/120만','84㎡','황성·용강권'],['현곡푸르지오','현곡면','2,000/115만','84㎡','현곡권'],['KTX신경주역 더메트로 줌파크','건천읍','2,000/110만','84㎡','서부권'],['두산위브트레지움','용강동','2,000/105만','84㎡','황성·용강권'],['협성휴포레 황성','황성동','1,000/100만','84㎡','황성·용강권'],['경주센트럴푸르지오','현곡면','2,000/95만','84㎡','현곡권'],['e편한세상 황성','황성동','1,000/90만','84㎡','황성·용강권'],['경주외동 미소지움','외동읍','1,000/82만','84㎡','외동권']],
    pyTop: [['힐스테이트 황성','황성동','49.8만','84㎡','황성·용강권'],['경주 뉴센트로 에일린의 뜰','황성동','46.4만','84㎡','황성·용강권'],['용황협성휴포레','용강동','42.2만','84㎡','황성·용강권'],['현곡푸르지오','현곡면','40.8만','84㎡','현곡권'],['KTX신경주역 더메트로 줌파크','건천읍','39.6만','84㎡','서부권'],['두산위브트레지움','용강동','38.2만','84㎡','황성·용강권'],['협성휴포레 황성','황성동','36.4만','84㎡','황성·용강권'],['경주센트럴푸르지오','현곡면','35.1만','84㎡','현곡권'],['e편한세상 황성','황성동','33.8만','84㎡','황성·용강권'],['경주외동 미소지움','외동읍','30.4만','84㎡','외동권']]
  }
};

const locationData = {
  school: { num:'01', tag:'SCHOOL DISTRICT', title:'도심 학군 접근성', lead:'황성·용강·현곡 생활권은 초·중학교 접근성과 학원가 이동 편의가 상대적으로 우수합니다.', score:86, points:['황성·용강권: 학교·학원 생활권이 밀집','현곡권: 신규 주거지 중심의 통학 수요 증가','주소별 배정 학교와 통학로를 개별 확인'], fact:'배정 학교는 주소와 학년도에 따라 달라질 수 있어 학교알리미·교육청 확인이 필요합니다.', pins:[['황성 학군',548,194],['현곡 학군',285,153],['도심 학군',401,269]] },
  traffic: { num:'02', tag:'DAILY MOBILITY', title:'차량 중심 생활교통', lead:'경주는 도시철도보다 승용차·시내버스 의존도가 높아 출퇴근 시간대 도로 접근성이 중요합니다.', score:73, points:['강변로·산업로·태종로 등 주요 축 접근성','황성·용강권은 생활권 내부 이동이 편리','외동권은 울산 방면 통근 동선 별도 확인'], fact:'출퇴근 시간은 요일·관광 성수기에 크게 달라질 수 있습니다. 실제 시간대별 경로를 확인하세요.', pins:[['시외버스터미널',376,313],['용강네거리',543,252],['외동축',615,405]] },
  rail: { num:'03', tag:'KTX & RAIL', title:'광역철도 접근성', lead:'KTX 경주역은 서울·대전·동대구·부산 등 광역 이동의 핵심 거점이며, 생활권별 차량 접근시간 차이가 큽니다.', score:88, points:['KTX 경주역: 서부권 광역교통 핵심','중앙선·동해선 일반철도 연계 확인','도심에서는 환승·주차 시간을 함께 고려'], fact:'열차 편성과 정차 횟수는 시기별로 달라집니다. 코레일 공식 시간표를 확인하세요.', pins:[['KTX 경주역',166,361],['서경주역',282,224],['경주역권',428,298]] },
  metro: { num:'04', tag:'METRO REALITY CHECK', title:'지하철·GTX 현황', lead:'경주에는 현재 도시철도·GTX 노선이 없습니다. 광고성 표현보다 실제 버스·철도 환승 시간을 기준으로 판단해야 합니다.', score:34, points:['현재 경주시 도시철도 운행 없음','GTX는 수도권 광역급행철도 체계로 경주와 무관','KTX·일반철도·시내버스의 실제 연결성이 핵심'], fact:'계획·검토 단계 교통망은 확정 노선과 구분하세요. 본 항목은 허위 역세권 기대를 줄이기 위한 체크입니다.', pins:[['도시철도 없음',401,269],['GTX 없음',547,194]] },
  amenity: { num:'05', tag:'DAILY AMENITIES', title:'생활편의 밀도', lead:'도심·황성·용강권은 장보기, 의료, 공공서비스 접근성이 높고 외곽은 차량 이동 범위를 함께 봐야 합니다.', score:81, points:['황성·용강: 상업·의료 인프라 밀집','도심권: 행정·전통시장 접근성','보문·외곽: 관광 수요와 일상 편의 분리 확인'], fact:'같은 생활권도 단지 출입구 위치에 따라 도보 접근성이 달라질 수 있습니다.', pins:[['중심상권',421,286],['황성상권',549,210],['보문생활권',616,332]] }
};

const districtConfig = {
  all: { label:'경주시 전체', dong:'전체', factor:1, indexOffset:0, volumeShare:1, volatility:1, zone:'경주시' },
  hwangseong: { label:'황성동', dong:'황성동', factor:1.14, indexOffset:2.1, volumeShare:.25, volatility:1.08, zone:'황성·용강권' },
  yonggang: { label:'용강동', dong:'용강동', factor:1.08, indexOffset:1.3, volumeShare:.18, volatility:1.04, zone:'황성·용강권' },
  dongcheon: { label:'동천동', dong:'동천동', factor:.94, indexOffset:-.4, volumeShare:.12, volatility:.96, zone:'도심권' },
  seonggeon: { label:'성건동', dong:'성건동', factor:.90, indexOffset:-.9, volumeShare:.10, volatility:.92, zone:'도심권' },
  hyeongok: { label:'현곡면', dong:'현곡면', factor:1.04, indexOffset:.8, volumeShare:.16, volatility:1.02, zone:'현곡권' },
  geoncheon: { label:'건천읍', dong:'건천읍', factor:.92, indexOffset:-.6, volumeShare:.09, volatility:.94, zone:'서부권' },
  oedong: { label:'외동읍', dong:'외동읍', factor:.88, indexOffset:-1.2, volumeShare:.10, volatility:.90, zone:'외동권' }
};

const districtApartments = {
  hwangseong:['힐스테이트 황성','경주 뉴센트로 에일린의 뜰','협성휴포레 황성','e편한세상 황성','황성주공1차','황성주공2차','황성주공3차','황성현대5차','럭키황성','청우3차'],
  yonggang:['용황협성휴포레','두산위브트레지움','용강주공','용강삼환나우빌','용강서한타운','협성휴포레용황','경주승삼','용강동서','대신3차','용강청구'],
  dongcheon:['동천우방타운','동천현대','동천주공','동천월드메르디앙','보우마니아','동천그린파크','동천청우','동원맨션','동천로얄','동천한신'],
  seonggeon:['성건보우','성건주공','성건현대','성건우방','성건동서','성건삼성','성건로얄','성건청우','성건한신','성건대우'],
  hyeongok:['현곡푸르지오','경주센트럴푸르지오','새한센시빌','금장주공','금장현대','현곡세정스위츠리','금장우방','현곡삼성','금장청구','현곡한신'],
  geoncheon:['KTX신경주역 더메트로 줌파크','신경주 반도유보라 아이비파크','건천휴먼시아','건천우방명사마을','건천주공','건천현대','건천삼성','건천청구','건천동서','건천한신'],
  oedong:['경주외동 미소지움','외동부영1단지','외동부영2단지','외동삼부르네상스','외동사랑으로부영','외동우방타운','외동주공','외동현대','외동청구','외동한신']
};

let activeType = 'sale';
let activeDistrict = 'all';
let activeDate = '2026-09-30';
const $ = (q, root=document) => root.querySelector(q);
const $$ = (q, root=document) => [...root.querySelectorAll(q)];

function parseDateParts(value) {
  const [year, month, day] = value.split('-').map(Number);
  return { year, month, day, monthIndex: year * 12 + month - 1 };
}

function scalePrice(raw, factor) {
  if (raw.includes('/')) {
    const [deposit, rent] = raw.replace('만','').split('/').map(v=>Number(v.replaceAll(',','')));
    const scaledDeposit=Math.round(deposit*factor/100)*100;
    return `${scaledDeposit.toLocaleString('ko-KR')}/${Math.round(rent*factor)}만`;
  }
  if (raw.endsWith('억')) return `${(Number(raw.replace('억',''))*factor).toFixed(2)}억`;
  if (raw.endsWith('만')) {
    const value=Number(raw.replace('만','').replaceAll(',',''))*factor;
    return `${value<100?value.toFixed(1):Math.round(value).toLocaleString('ko-KR')}만`;
  }
  return raw;
}

function formatPct(value) { return `${value>=0?'▲':'▼'} ${Math.abs(value).toFixed(1)}%`; }

function buildViewData(type) {
  const base=marketData[type], cfg=districtConfig[activeDistrict], date=parseDateParts(activeDate);
  const monthDiff=date.monthIndex-(2026*12+8), dateTrend=1+monthDiff*.0032;
  const priceFactor=cfg.factor*dateTrend;
  const daysInMonth=new Date(date.year,date.month,0).getDate();
  const completion=Math.max(.08,Math.min(1,date.day/daysInMonth));
  const season=1+Math.sin(date.month*.82)*.08;
  const indices=base.indices.map((v,i)=>Number((v+cfg.indexOffset+monthDiff*.065+(i-base.indices.length+1)*.01).toFixed(2)));
  const changes=base.changes.map((v,i)=>Number((v*cfg.volatility+Math.sin((i+date.month)*.7)*.025).toFixed(2)));
  const volume=Math.max(1,Math.round(Number(base.volume.replace(/\D/g,''))*cfg.volumeShare*season*completion));
  const volumeDelta=(Math.cos((date.monthIndex+activeDistrict.length)*.8)*7.2)*cfg.volatility;
  const rankSource=activeDistrict==='all'?base.top:base.top.map((row,i)=>[districtApartments[activeDistrict][i],cfg.dong,row[2],row[3],cfg.zone]);
  const pySource=activeDistrict==='all'?base.pyTop:base.pyTop.map((row,i)=>[districtApartments[activeDistrict][i],cfg.dong,row[2],row[3],cfg.zone]);
  return {
    ...base,
    index:(Number(base.index)+cfg.indexOffset+monthDiff*.065).toFixed(1),
    indexChange:formatPct(changes.at(-1)),
    median:scalePrice(base.median,priceFactor),
    medianChange:formatPct((Number(base.medianChange.match(/[\d.]+/)[0])+cfg.indexOffset*.08+monthDiff*.025)*Math.sign(dateTrend)),
    volume:`${volume.toLocaleString('ko-KR')}건`, volumeChange:formatPct(volumeDelta),
    py:scalePrice(base.py,priceFactor), pyChange:formatPct(Number(base.pyChange.match(/[\d.]+/)[0])+cfg.indexOffset*.06+monthDiff*.02),
    indices, changes,
    narrative:`${cfg.label} ${monthDiff<0?'과거 시점':'최근'} 흐름 · 선택일 기준 재계산`,
    volumeBars:base.volumeBars.map((v,i)=>Math.max(1,Math.round(v*cfg.volumeShare*(1+Math.sin((i+date.month)*.6)*.06)*(i===base.volumeBars.length-1?completion:1)))),
    top:rankSource.map(r=>[r[0],r[1],scalePrice(r[2],priceFactor),r[3],r[4]]),
    pyTop:pySource.map(r=>[r[0],r[1],scalePrice(r[2],priceFactor),r[3],r[4]])
  };
}

function updateDateLabels() {
  const d=parseDateParts(activeDate); const start=new Date(d.year,d.month-1-21,1);
  $('#reportDateLabel').textContent=`${d.year}.${String(d.month).padStart(2,'0')}.${String(d.day).padStart(2,'0')} 기준`;
  $('#chartStartLabel').textContent=`${String(start.getFullYear()).slice(2)}.${String(start.getMonth()+1).padStart(2,'0')}`;
  $('#chartEndLabel').textContent=`${String(d.year).slice(2)}.${String(d.month).padStart(2,'0')}`;
  $('#activeFilterSummary').textContent=`${districtConfig[activeDistrict].label} · 시연용`;
}

function renderMarket(type) {
  activeType = type;
  const d = buildViewData(type);
  $('#indexValue').textContent = d.index; $('#indexChange').textContent = d.indexChange;
  $('#medianValue').textContent = d.median; $('#medianUnit').textContent = d.medianUnit; $('#medianChange').textContent = d.medianChange;
  $('#volumeValue').textContent = d.volume; $('#volumeChange').textContent = d.volumeChange;
  $('#pyValue').textContent = d.py; $('#pyChange').textContent = d.pyChange;
  $('#chartTypeLabel').textContent = d.label; $('#chartNarrative').textContent = d.narrative; $('#priceUnit').textContent = d.unit;
  $$('.type-btn').forEach(btn => { const on = btn.dataset.type === type; btn.classList.toggle('active', on); btn.setAttribute('aria-selected', String(on)); });
  updateDateLabels(); drawPriceChart(d.indices, d.changes); renderRanking('#tradeRanking', d.top); renderRanking('#pyRanking', d.pyTop); renderVolume(d.volumeBars);
}

function drawPriceChart(values, changes) {
  const w=760,h=245,p={l:36,r:12,t:12,b:35}; const min=Math.floor(Math.min(...values)-1), max=Math.ceil(Math.max(...values)+1);
  const x=i=>p.l+i*(w-p.l-p.r)/(values.length-1); const y=v=>p.t+(max-v)*(h-p.t-p.b)/(max-min); const zeroY=h-p.b-21;
  const line=values.map((v,i)=>`${i?'L':'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' '); const area=`${line} L${x(values.length-1)},${zeroY} L${x(0)},${zeroY} Z`;
  const ticks=[min,Math.round((min+max)/2),max];
  const grid=ticks.map(v=>`<line class="grid-line" x1="${p.l}" x2="${w-p.r}" y1="${y(v)}" y2="${y(v)}"/><text class="axis-label" x="0" y="${y(v)+4}">${v}</text>`).join('');
  const bars=changes.map((v,i)=>{const bh=Math.max(2,Math.abs(v)*24), bw=Math.max(4,(w-p.l-p.r)/values.length-3); return `<rect class="change-bar ${v>=0?'up':'down'}" x="${x(i)-bw/2}" y="${v>=0?zeroY-bh:zeroY}" width="${bw}" height="${bh}" rx="2"/>`;}).join('');
  const dots=values.map((v,i)=>`<circle class="chart-dot" cx="${x(i)}" cy="${y(v)}" r="${i===values.length-1?5:8}" opacity="${i===values.length-1?1:0}" data-index="${i}" data-value="${v.toFixed(1)}"/>`).join('');
  $('#priceChart').innerHTML=`<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><defs><linearGradient id="priceArea" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#356df3"/><stop offset="1" stop-color="#356df3" stop-opacity="0"/></linearGradient></defs>${grid}${bars}<line class="grid-line" x1="${p.l}" x2="${w-p.r}" y1="${zeroY}" y2="${zeroY}"/><path class="price-area" d="${area}"/><path class="price-path" d="${line}"/>${dots}</svg>`;
  let tip=$('.chart-tooltip'); if(!tip){tip=document.createElement('div');tip.className='chart-tooltip';document.body.appendChild(tip);}
  $$('.chart-dot', $('#priceChart')).forEach(dot=>{ dot.addEventListener('mouseenter',e=>{tip.textContent=`지수 ${e.target.dataset.value}`;tip.style.opacity=1;}); dot.addEventListener('mousemove',e=>{tip.style.left=e.clientX+'px';tip.style.top=e.clientY+'px';}); dot.addEventListener('mouseleave',()=>tip.style.opacity=0); });
}

function renderRanking(target, rows) {
  const max=10;
  $(target).innerHTML=rows.map((r,i)=>`<div class="ranking-row" tabindex="0" role="button" data-name="${r[0]}" data-address="경주시 ${r[1]}" data-price="${r[2]}" data-area="${r[3]}" data-zone="${r[4]}"><span class="order">${String(i+1).padStart(2,'0')}</span><div class="apt-name"><strong>${r[0]}</strong><span>${r[1]} · ${r[3]}</span></div><div class="rank-bar"><i style="width:${Math.round((max-i)/max*100)}%"></i></div><strong class="rank-price">${r[2]}</strong></div>`).join('');
  $$('.ranking-row',$(target)).forEach(row=>{row.addEventListener('click',()=>openDrawer(row.dataset));row.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openDrawer(row.dataset);}});});
}

function renderVolume(values){ const end=parseDateParts(activeDate); const labels=values.map((_,i)=>{const d=new Date(end.year,end.month-1-(values.length-1-i),1);return {year:d.getFullYear(),month:String(d.getMonth()+1).padStart(2,'0')}}); const max=Math.max(...values); $('#volumeChart').innerHTML=values.map((v,i)=>`<div class="volume-column" title="${labels[i].year}.${labels[i].month} · ${v}건"><i style="height:${v/max*84}%"></i><span>${labels[i].month}</span></div>`).join(''); }

function renderLocation(key){ const d=locationData[key]; $$('.location-tab').forEach(btn=>btn.classList.toggle('active',btn.dataset.location===key)); $('#analysisNumber').textContent=d.num;$('#analysisTag').textContent=d.tag;$('#analysisTitle').textContent=d.title;$('#analysisLead').textContent=d.lead;$('#analysisScore').textContent=d.score;$('#scoreTrack').style.width=d.score+'%';$('#analysisPoints').innerHTML=d.points.map(p=>`<li>${p}</li>`).join('');$('#analysisFact').innerHTML=`<b>확인 포인트</b><span>${d.fact}</span>`; $('#mapPins').innerHTML=d.pins.map((pin,i)=>`<g class="map-pin ${i===0?'active':''}" transform="translate(${pin[1]},${pin[2]})"><circle r="${i===0?29:24}"/><text y="4">${pin[0]}</text></g>`).join(''); }

function openDrawer(data){ const d=parseDateParts(activeDate); $('#drawerTitle').textContent=data.name;$('#drawerAddress').textContent=data.address;$('#drawerPrice').textContent=data.price;$('#drawerArea').textContent=data.area;$('#drawerZone').textContent=data.zone;$('#drawerDate').textContent=`${d.year}.${String(d.month).padStart(2,'0')}.${String(d.day).padStart(2,'0')}`;$('#detailDrawer').classList.add('open');$('#drawerBackdrop').classList.add('open');$('#detailDrawer').setAttribute('aria-hidden','false');$('.drawer-close').focus(); }
function closeDrawer(){ $('#detailDrawer').classList.remove('open');$('#drawerBackdrop').classList.remove('open');$('#detailDrawer').setAttribute('aria-hidden','true'); }

$$('.type-btn').forEach(btn=>btn.addEventListener('click',()=>renderMarket(btn.dataset.type)));
$$('.location-tab').forEach(btn=>btn.addEventListener('click',()=>renderLocation(btn.dataset.location)));
$('.drawer-close').addEventListener('click',closeDrawer);$('#drawerBackdrop').addEventListener('click',closeDrawer);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer();});
$('[data-scroll-location]').addEventListener('click',()=>{closeDrawer();setTimeout(()=>$('#location').scrollIntoView({behavior:'smooth'}),100);});
$('#dongSelect').addEventListener('change',e=>{ activeDistrict=e.target.value; renderMarket(activeType); });
$('#dateSelect').addEventListener('change',e=>{ if(!e.target.value)return; activeDate=e.target.value; renderMarket(activeType); });

const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){$$('.nav-item').forEach(n=>n.classList.toggle('active',n.getAttribute('href')==='#'+entry.target.id));}}),{rootMargin:'-35% 0px -55%',threshold:0});
['overview','rankings','location','market'].forEach(id=>{const el=document.getElementById(id);if(el)navObserver.observe(el);});
renderMarket('sale');renderLocation('school');
