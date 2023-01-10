import postcssImport from 'postcss-import'
import  PostcssPresetEnv  from 'postcss-preset-env'
import cssnanoPlugin from 'cssnano'
import autoprefixer from 'autoprefixer'

export default  {
    plugins: [
        postcssImport,
        PostcssPresetEnv({stage: 1}),
        cssnanoPlugin,
        autoprefixer
    ]
}