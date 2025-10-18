 import { src, dest, watch} from 'gulp';
 import * as dartSass from 'sass';
 import gulpSass from 'gulp-sass';
 
 const sass = gulpSass(dartSass)

 export function css(done){
   src('src/scss/app.scss')
   .pipe(sass().on ('error', sass.logError))
   .pipe(dest('build/css'))
    done()
 }

 export function dev(done){
    watch('src/scss/**/*.scss', css)
    done();
 }
//172 Añadiendo normalize

//Hola mi proyecto no se ve como el del profe en el minuto 2:17 
 //no se me compila la hoja de estilo de normalize en mi hoja de estilo de mi app.css 