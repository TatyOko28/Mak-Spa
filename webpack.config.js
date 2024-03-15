const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Le point d'entrée de votre application
  entry: './src/index.tsx',
  
  // La sortie compilée
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  
  // Extensions de fichiers à résoudre
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  
  // Règles pour traiter différents types de modules
  module: {
    rules: [
      // Règle pour les fichiers TypeScript / TSX
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Règle pour les fichiers CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Règle pour les fichiers d'images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  
  // Plugins à utiliser
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Chemin vers le fichier HTML de template
    }),
  ],
  
  // Configuration pour le mode de développement
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000, // Vous pouvez choisir le port que vous préférez
  },

  // Configuration supplémentaire pour le mode de développement
  devtool: 'inline-source-map',

  // Configuration pour le mode de production
  mode: 'development', // Changez en 'production' lorsque vous êtes prêt à déployer
};
