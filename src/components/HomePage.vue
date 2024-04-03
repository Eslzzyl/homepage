<template>
  <div class="max-w-screen min-h-screen flex justify-center bg-tsumugi bg-cover bg-fixed">
    <div class="w-screen min-h-screen flex flex-col justify-center items-center" id="main">
      <div class="mt-16">
        <div class="my-8 flex justify-center items-center">
          <img src="/avatar/sakura-nene.jpg" alt="Avatar" class="rounded-full w-16 h-16 mr-4">
          <span class="text-4xl text-orange-50">
            Eslzzyl 👋
          </span>
        </div>
        <div class="flex justify-center">
          <span class="text-2xl text-orange-50">
            HFUT CS 🐭🐭
          </span>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <div
          class="bg-slate-50/75 hover:bg-slate-50/90 shadow-xl rounded-lg px-4 py-2 m-4 flex justify-center items-center">
          <a href="https://img.eslzzyl.eu.org">
            图床
          </a>
        </div>
        <div
          class="bg-slate-50/75 hover:bg-slate-50/90 shadow-xl rounded-lg px-4 py-2 m-4 flex justify-center items-center">
          <a href="https://pan.eslzzyl.eu.org">
            网盘
          </a>
        </div>
        <div
          class="bg-slate-50/75 hover:bg-slate-50/90 shadow-xl rounded-lg px-4 py-2 m-4 flex justify-center items-center">
          <a href="https://github.com/Eslzzyl">
            GitHub
          </a>
        </div>
        <div
          class="bg-slate-50/75 hover:bg-slate-50/90 shadow-xl rounded-lg px-4 py-2 m-4 flex justify-center items-center">
          <a href="https://home.cnblogs.com/u/eslzzyl/">
            博客园
          </a>
        </div>
        <div
          class="bg-slate-50/75 hover:bg-slate-50/90 shadow-xl rounded-lg px-4 py-2 m-4 flex justify-center items-center">
          <a href="https://eslzzyl.github.io/">
            学术主页（WIP）
          </a>
        </div>
      </div>
      <div class="bg-slate-50/75 p-8 mt-16 mb-8 w-2/5 shadow-xl rounded-lg">
        <article class="prose prose-base">
          <h2>介绍</h2>
          <p>
            <ul>
              <li>合工大（宣城）计算机科学与技术本科</li>
              <li>合工大计算机科学与技术硕士研究生（研0）</li>
            </ul>
            研究方向为基于深度学习的底层计算机视觉
          </p>
          <p>（CV 是个大坑啊。。希望能够多争取到一点主动吧）</p>
          <p>热爱开源社区，最活跃的地方应该是 GitHub 和博客园。</p>
          <h2>联系方式</h2>
          <p><a href="mailto:eslzzyl@163.com">eslzzyl@163.com</a></p>
          <p>更正式的邮箱：<a href="mailto:eslzzyl@mail.hfut.edu.cn">eslzzyl@mail.hfut.edu.cn</a></p>
          <h2>感兴趣的技术</h2>
          <p>Rust、Web 前端、计算机排版、Flutter、Android 原生、Tauri、.NET、函数式编程……感兴趣的太多啦！</p>
          <h2>FAQ</h2>
          <h3>为什么叫 Eslzzyl？</h3>
          <p>（这个问题是编写代码时 Copilot 提出来的）</p>
          <p>这是我中学学校名字和我的名字的首字母缩写组合而来的。</p>
          <h3>这个网页是怎么做的？</h3>
          <p>见 <a href="https://github.com/Eslzzyl/homepage">此处</a>。主要技术是 Vue 和 Tailwind CSS。为了轻量，没有引入组件库。</p>
          <h3>背景是谁？</h3>
          <p><a href="https://zh.moegirl.org.cn/%E6%A4%8E%E5%8F%B6%E4%8C%B7">椎叶紬</a>。这副 CG 出自紬线的结尾处。</p>
          <h3>头像是谁？</h3>
          <p><del>捏捏鸡</del><a href="https://zh.moegirl.org.cn/%E6%A8%B1%E5%AE%81%E5%AE%81">樱宁宁</a>。</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})

function handleScroll() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const main = document.querySelector('#main');
  if (main) {
    if (scrollTop > 0) {
      main.classList.add('backdrop-blur-sm');
    } else {
      main.classList.remove('backdrop-blur-sm');
    }
  }
}

</script>
