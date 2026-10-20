/* Text2SQL survey report — ECharts initialization
 * Colors are derived from the report's CSS variables to keep the visual
 * language consistent with the rest of the document.
 */
(function () {
  if (typeof echarts === 'undefined') return;

  var css = getComputedStyle(document.documentElement);
  function v(name, fallback) {
    var val = css.getPropertyValue(name);
    return (val && val.trim()) || fallback;
  }

  var ACCENT = v('--accent', '#1f5f8b');
  var ACCENT2 = v('--accent2', '#c2681a');
  var INK = v('--ink', '#17181a');
  var MUTED = v('--muted', '#6a6d72');
  var RULE = v('--rule', '#e6e3dc');
  var SURFACE = v('--bg2', '#ffffff');

  // Palette anchored on the two accent hues, with complementary tones.
  var PALETTE = [ACCENT, ACCENT2, '#4f8f6b', '#8a6fb0', '#b0553f', '#3f8fa8'];

  var FONT = "'InstrumentSans', system-ui, sans-serif";

  var baseText = {
    fontFamily: FONT,
    color: INK
  };

  var baseTooltip = {
    backgroundColor: SURFACE,
    borderColor: RULE,
    borderWidth: 1,
    textStyle: { color: INK, fontFamily: FONT, fontSize: 12 },
    extraCssText: 'box-shadow: 0 4px 14px rgba(0,0,0,0.08);'
  };

  var charts = [];

  function mount(id, option) {
    var el = document.getElementById(id);
    if (!el) return;
    el.style.height = el.style.height || '340px';
    var chart = echarts.init(el, null, { renderer: 'canvas' });
    chart.setOption(option);
    charts.push(chart);
  }

  /* 图 1 · 按领域分布 */
  mount('chart-domain', {
    textStyle: baseText,
    tooltip: Object.assign({ trigger: 'item', formatter: '{b}<br/>{c} 篇（{d}%）' }, baseTooltip),
    legend: {
      bottom: 0,
      icon: 'circle',
      itemWidth: 9,
      itemHeight: 9,
      textStyle: { color: MUTED, fontFamily: FONT, fontSize: 12 }
    },
    series: [
      {
        type: 'pie',
        radius: ['46%', '68%'],
        center: ['50%', '46%'],
        avoidLabelOverlap: true,
        itemStyle: { borderColor: SURFACE, borderWidth: 2 },
        label: {
          color: INK,
          fontFamily: FONT,
          fontSize: 12,
          formatter: '{b}\n{c} 篇'
        },
        labelLine: { lineStyle: { color: RULE } },
        data: [
          { value: 8, name: '数据库顶会' },
          { value: 19, name: 'NLP 顶会' },
          { value: 15, name: '通用 AI 顶会' }
        ],
        color: [ACCENT, ACCENT2, '#4f8f6b']
      }
    ]
  });

  /* 图 2 · 按年份分布 */
  mount('chart-year', {
    textStyle: baseText,
    grid: { top: 30, right: 20, bottom: 24, left: 44 },
    tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' }, formatter: '{b} 年：{c} 篇' }, baseTooltip),
    xAxis: {
      type: 'category',
      data: ['2024', '2025', '2026'],
      axisLine: { lineStyle: { color: RULE } },
      axisTick: { show: false },
      axisLabel: { color: MUTED, fontFamily: FONT, fontSize: 12 }
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: RULE } },
      axisLabel: { color: MUTED, fontFamily: FONT, fontSize: 12 }
    },
    series: [
      {
        type: 'bar',
        barWidth: '46%',
        itemStyle: { color: ACCENT, borderRadius: [4, 4, 0, 0] },
        label: {
          show: true,
          position: 'top',
          color: INK,
          fontFamily: FONT,
          fontSize: 12
        },
        data: [16, 23, 3]
      }
    ]
  });

  /* 图 3 · 按主要技术路线归类（跨类者取主线，合计 42） */
  var routes = [
    { name: '提示工程 / ICL', value: 12 },
    { name: '合成数据 / 微调', value: 10 },
    { name: '搜索式推理', value: 6 },
    { name: '多智能体协作', value: 6 },
    { name: '真实企业级评测', value: 6 },
    { name: '强化学习', value: 2 }
  ];

  mount('chart-tech', {
    textStyle: baseText,
    grid: { top: 16, right: 40, bottom: 24, left: 132 },
    tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' }, formatter: '{b}：{c} 篇' }, baseTooltip),
    xAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: RULE } },
      axisLabel: { color: MUTED, fontFamily: FONT, fontSize: 12 }
    },
    yAxis: {
      type: 'category',
      inverse: true,
      data: routes.map(function (r) { return r.name; }),
      axisLine: { lineStyle: { color: RULE } },
      axisTick: { show: false },
      axisLabel: { color: INK, fontFamily: FONT, fontSize: 12 }
    },
    series: [
      {
        type: 'bar',
        barWidth: '54%',
        itemStyle: {
          borderRadius: [0, 4, 4, 0],
          color: function (p) { return PALETTE[p.dataIndex % PALETTE.length]; }
        },
        label: {
          show: true,
          position: 'right',
          color: INK,
          fontFamily: FONT,
          fontSize: 12,
          formatter: '{c}'
        },
        data: routes.map(function (r) { return r.value; })
      }
    ]
  });

  function resizeAll() {
    charts.forEach(function (c) { c.resize(); });
  }
  window.addEventListener('resize', resizeAll);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(resizeAll);
  }
})();
