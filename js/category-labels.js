/**
 * arXiv 分类码到中文标签的映射
 * 用于在 UI 上显示中文分类名,但 data-category 属性仍保留原始代码
 */
const CATEGORY_LABELS = {
  // Computer Science
  'cs.AI': '人工智能',
  'cs.AR': '硬件架构',
  'cs.CC': '计算复杂度',
  'cs.CE': '计算工程',
  'cs.CG': '计算几何',
  'cs.CL': '自然语言处理',
  'cs.CR': '密码与安全',
  'cs.CV': '计算机视觉',
  'cs.CY': '计算机与社会',
  'cs.DB': '数据库',
  'cs.DC': '分布式计算',
  'cs.DS': '数据结构与算法',
  'cs.DL': '数字图书馆',
  'cs.GL': '计算机科学综合',
  'cs.GR': '计算机图形学',
  'cs.GT': '博弈论',
  'cs.HC': '人机交互',
  'cs.IR': '信息检索',
  'cs.IT': '信息论',
  'cs.LG': '机器学习',
  'cs.LO': '计算逻辑',
  'cs.MA': '多智能体系统',
  'cs.MM': '多媒体',
  'cs.MS': '数学软件',
  'cs.NA': '数值分析',
  'cs.NE': '神经与演化计算',
  'cs.NI': '网络与互联网',
  'cs.OH': '其他',
  'cs.OS': '操作系统',
  'cs.PF': '性能评估',
  'cs.PL': '编程语言',
  'cs.RO': '机器人学',
  'cs.SC': '符号计算',
  'cs.SD': '声音',
  'cs.SE': '软件工程',
  'cs.SI': '社交与信息网络',
  'cs.SY': '系统与控制',

  // Quantitative Biology
  'q-bio.BM': '生物分子',
  'q-bio.CB': '细胞行为',
  'q-bio.GN': '基因组学',
  'q-bio.MN': '分子网络',
  'q-bio.NC': '神经元与认知',
  'q-bio.OT': '其他定量生物学',
  'q-bio.PE': '种群与进化',
  'q-bio.QM': '定量方法',
  'q-bio.SC': '亚细胞过程',
  'q-bio.TO': '组织与器官',

  // Quantitative Finance
  'q-fin.CP': '计算金融',
  'q-fin.EC': '经济学',
  'q-fin.GN': '一般金融',
  'q-fin.MF': '数学金融',
  'q-fin.PM': '投资组合管理',
  'q-fin.PR': '定价衍生品',
  'q-fin.RM': '风险管理',
  'q-fin.ST': '统计金融',
  'q-fin.TR': '交易与市场微观结构',

  // Statistics
  'stat.AP': '应用统计',
  'stat.CO': '统计计算',
  'stat.ME': '统计方法',
  'stat.ML': '机器学习(统计)',
  'stat.OT': '其他统计',
  'stat.TH': '统计理论',

  // Electrical Engineering and Systems Science
  'eess.AS': '音频与语音处理',
  'eess.IV': '图像与视频处理',
  'eess.SP': '信号处理',
  'eess.SY': '系统与控制',

  // Physics
  'physics.acc-ph': '加速器物理',
  'physics.app-ph': '应用物理',
  'physics.ao-ph': '大气与海洋物理',
  'physics.atm-clus': '原子簇',
  'physics.bio-ph': '生物物理',
  'physics.chem-ph': '化学物理',
  'physics.class-ph': '经典物理',
  'physics.comp-ph': '计算物理',
  'physics.data-an': '数据分析与统计',
  'physics.ed-ph': '物理教育',
  'physics.flu-dyn': '流体动力学',
  'physics.gen-ph': '普通物理',
  'physics.geo-ph': '地球物理',
  'physics.hist-ph': '物理学史',
  'physics.ins-det': '仪器与探测器',
  'physics.med-ph': '医学物理',
  'physics.optics': '光学',
  'physics.plasm-ph': '等离子体物理',
  'physics.pop-ph': '大众物理',
  'physics.soc-ph': '社会物理',
  'physics.space-ph': '空间物理',

  // Mathematics
  'math.AG': '代数几何',
  'math.AT': '代数拓扑',
  'math.AP': '分析PDE',
  'math.CT': '范畴论',
  'math.CA': '经典分析',
  'math.CO': '组合数学',
  'math.AC': '交换代数',
  'math.CV': '复变函数',
  'math.DG': '微分几何',
  'math.DS': '动力系统',
  'math.FA': '泛函分析',
  'math.GM': '一般数学',
  'math.GN': '一般拓扑',
  'math.GT': '几何拓扑',
  'math.GR': '群论',
  'math.HO': '数学史',
  'math.IT': '信息论',
  'math.KT': 'K-理论与同调',
  'math.LO': '逻辑',
  'math.MP': '数学物理',
  'math.MG': '度量几何',
  'math.NT': '数论',
  'math.NA': '数值分析',
  'math.OA': '算子代数',
  'math.OC': '优化与控制',
  'math.PR': '概率论',
  'math.QA': '量子代数',
  'math.RT': '表示论',
  'math.RA': '环与代数',
  'math.SP': '谱理论',
  'math.ST': '统计理论',
  'math.SG': '辛几何',

  // 标准兜底
  'all': '全部'
};

/**
 * 获取分类的中文显示标签
 * 如果没有对应的映射,返回原始代码
 * @param {string} code - arXiv 分类码(如 'cs.CV')
 * @returns {string} 中文标签或原始代码
 */
function getCategoryLabel(code) {
  return CATEGORY_LABELS[code] || code;
}
