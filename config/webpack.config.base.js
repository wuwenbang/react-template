import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const resolvePath = (relativePath) => resolve(__dirname, relativePath);

const baseConfig = {
  entry: resolvePath('../src/index.tsx'),
  output: {
    filename: '[name].js',
    path: resolvePath('../dist'),
  },
  module: {
    // 配置 loader
    rules: [
      // 处理 ts|tsx 文件
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
      },
      // 处理 css 文件
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 处理 sass 文件
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // 处理 images 文件
      {
        test: /\.png/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // 配置 html 文件
    new HtmlWebpackPlugin({
      template: resolvePath('../public/index.html'),
      filename: 'index.html',
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      src: resolvePath('../src'),
    },
  },
};

export default baseConfig;
