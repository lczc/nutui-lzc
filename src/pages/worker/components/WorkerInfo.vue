<template>
  <View class="worker-info">
    <View class="worker-info-avatar-wrapper">
      <Image class="worker-info-avatar" :src="worker_image" />
    </View>
    <View class="worker-info-content">

      <View class="worker-info-profile">
        <View class="worker-info-title">
          <View class="worker-info-name">李太郎 | 木工</View>
        </View>
        <View class="worker-info-subtitle">
          <View class="worker-info-tag">
            <Image class="worker-info-tag-icon" :src="protect"></Image>
            <View class="worker-info-tag-text">已实名</View>
          </View>
          <View class="worker-info-tag">
            <Image class="worker-info-tag-icon" :src="star"></Image>
            <View class="worker-info-tag-text">4.8/5分</View>
          </View>
        </View>
      </View>

      <View class="worker-info-side">
        <View class="worker-info-state">
          <View class="worker-info-state-text">空闲中</View>
          <Image class="worker-info-state-icon" :src="round_green"></Image>
        </View>
      </View>

    </View>
  </View>
</template>

<script lang="ts" setup>
import { View, Image } from '@tarojs/components'
import { protect, star, round_green, worker_image } from '@/assets/index';


</script>

<style lang="scss">
@import '@/style/index.scss';

.worker-info {
  background-color: $base-item-background;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  box-shadow: $base-box-shadow-xhm;
  margin: 0px 50px 20px 50px;
  padding: 10px;

  .worker-info-avatar-wrapper {
    margin: 15px;

    .worker-info-avatar {
      width: 110px;
      height: 110px;
      border: 7px solid #fff;
      background-size: cover;
      background-position: center;
      border-radius: 100%;
    }
  }

  .worker-info-content {
    margin: 15px;
    width: 100%;
    height: 100px;
    flex-direction: row;

    .worker-info-profile {
      width: 70%;

      .worker-info-title {
        @include font-black-title();
        font-size: 33px;
        font-weight: bold;
      }

      .worker-info-subtitle {
        flex-direction: row;
        margin-top: 5px;

        .worker-info-tag {
          margin-right: 12px;
          flex-direction: row;
          align-items: center;

          .worker-info-tag-text {
            @include font-black-title();
            font-size: 30px;
          }

          .worker-info-tag-icon {
            width: 30px;
            height: 30px;
            margin-right: 5px;
          }
        }
      }
    }

    .worker-info-side {
      width: 30%;


      .worker-info-state {
        flex-direction: row;
        align-items: center;

        .worker-info-state-text {
          @include font-black-title();
          font-size: 30px;
        }

        .worker-info-state-icon {
          width: 30px;
          height: 30px;
          margin-left: 5px;
        }
      }
    }
  }

}
</style>