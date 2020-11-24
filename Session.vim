let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/work/project/mock-blog/client-mock-blog
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 src/App.js
badd +5 src/components/Home.js
badd +11 src/components/About.js
badd +16 src/components/Articles.js
badd +36 package.json
badd +4 src/App.test.js
badd +71 src/routes/Articles.js
badd +1 src/components/Navbar.js
badd +10 src/App.css
badd +1 src/routes/Home.js
badd +2 src/components/Navbar.css
badd +3 src/routes/Articles.css
badd +0 output:///snippets
argglobal
%argdel
$argadd ./
edit src/routes/Articles.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=9
setlocal fml=1
setlocal fdn=5
setlocal fen
6
normal! zo
15
normal! zo
15
normal! zo
21
normal! zo
25
normal! zo
26
normal! zo
28
normal! zo
42
normal! zo
52
normal! zo
52
normal! zo
58
normal! zo
59
normal! zo
let s:l = 69 - ((34 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
69
normal! 0
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOF
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
