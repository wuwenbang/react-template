// 合并规则
import { merge } from 'webpack-merge';
// 导入基础配置
import baseConfig from './webpack.config.base.js';

export default merge(baseConfig, {
  // 环境配置：生产环境
  mode: 'production',
});
