export default function Times() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto text-zinc-900 dark:text-zinc-100">
      <h1 className="text-3xl mb-4">Times</h1>

      <hr className="my-4 border-zinc-300 dark:border-zinc-700" />

      {/* 第一段经历 */}
      <div
        className="mb-10 rounded-xl border border-zinc-300 bg-zinc-50 p-8 shadow-md 
                      dark:border-zinc-700 dark:bg-zinc-900"
      >
        <h2 className="text-xl font-semibold mb-4">云南绿汁 · 录音机咖啡</h2>

        <p className="text-lg mb-1">
          <span className="font-medium">职位：</span>副店长
        </p>
        <p className="text-base text-zinc-500 dark:text-zinc-400">
          2025.04 - 2025.06
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">岗位职责</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li>负责门店日常开闭店管理及现场运营统筹</li>
            <li>独立完成咖啡及各类饮品标准化出品，保障高峰期稳定出杯效率</li>
            <li>负责员工排班管理与现场协作调度，优化人效配置</li>
            <li>管理小程序商品上下架及库存状态维护</li>
            <li>负责小程序与第三方平台收款对账，确保账务准确无误</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">业绩表现</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li>💰 单日最高营业额：14,000 元</li>
            <li>🧾 单日最高客单量：200+ 单</li>
            <li>☕ 高峰日出杯量：700+ 杯</li>
            <li>在高客流情况下保持出品稳定与服务质量</li>
          </ul>
        </div>
      </div>

      {/* 第二段经历 */}
      <div
        className="rounded-xl border border-zinc-300 bg-zinc-50 p-8 shadow-md 
                      dark:border-zinc-700 dark:bg-zinc-900"
      >
        <h2 className="text-xl font-semibold mb-4">海南潭门 · 椰雀咖啡</h2>

        <p className="text-lg mb-1">
          <span className="font-medium">职位：</span>店长（0-1 筹建运营）
        </p>
        <p className="text-base text-zinc-500 dark:text-zinc-400">
          2025.06 - 2026.01
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">岗位职责</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li>负责门店从选址规划到正式营业的全流程搭建</li>
            <li>主导员工招聘、培训及团队建设</li>
            <li>统筹设备采购、物料供应及成本控制</li>
            <li>参与空间布局规划与动线设计</li>
            <li>制定并优化出品标准，确保品质稳定</li>
            <li>负责门店整体运营管理及日常财务监督</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">业绩表现</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li>🚀 独立完成门店从 0 到 1 落地</li>
            <li>🏗 搭建基础运营体系与团队结构</li>
            <li>📋 建立标准化出品及管理流程</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
