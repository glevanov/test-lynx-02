<template>
  <div id="app">
    <img class="illustration" alt="Шахматная доска" src="./assets/board.svg">
    <Board />
  </div>
</template>

<script>
import Board from '@/components/Board.vue';

export default {
  name: 'app',
  components: {
    Board,
  },
};
</script>

<style>
#app {
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-items: center;

  background-color: #ffffff;
  border-radius: 3px;
}

@media (min-width: 768px) {
  #app {
    flex-direction: row;
    justify-content: unset;
    max-width: 768px;
  }
}

.illustration {
  width: 100%;
  height: auto;
  max-width: 500px;
}
</style>
