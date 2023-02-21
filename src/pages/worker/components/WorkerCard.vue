<template>
  <View class="worker-card">
    <View class="worker-card-content">
      <View class="worker-card-main">
        <View class="worker-card-profile">
          <View class="worker-card-title">
            <View class="worker-card-title-name">李太郎 | 木工</View>
            <View class="worker-card-title-tag"><nut-tag type="success"  color="#eafedc" textColor="#88b776">今日活跃</nut-tag></View>
          </View>

          <View class="worker-card-subtitle">
            <View class="worker-card-subtitle-item">3年经验 </View>
            <nut-divider direction="vertical" />
            <View class="worker-card-subtitle-item">32岁 </View>
            <nut-divider direction="vertical" />
            <View class="worker-card-subtitle-item">600/日 </View>
          </View>
        </View>

        <View class="worker-card-refer">
          <View class="worker-card-refer-item">
            <Image class="worker-card-refer-item-icon" :src="engineering_vehicle"></Image>
            <View class="worker-card-refer-item-text">找活中,随时到岗</View>
          </View>
          <View class="worker-card-refer-item">
            <Image class="worker-card-refer-item-icon" :src="location_two"></Image>
            <View class="worker-card-refer-item-text">位于惠城区, 距离您5km</View>
          </View>
        </View>
      </View>

      <View class="worker-card-side">
        <View class="worker-card-avatar-wrapper">
          <Image class="worker-card-avatar" :src="worker_image" />
        </View>
        <View class="worker-card-side-content">
          <View class="worker-card-side-item">
            <Image class="worker-card-side-item-icon" :src="protect"></Image>
            <View class="worker-card-side-item-text">已实名</View>
          </View>
          <View class="worker-card-side-item">
            <Image class="worker-card-side-item-icon" :src="star"></Image>
            <View class="worker-card-side-item-text">4.8/5分</View>
          </View>
        </View>
      </View>
    </View>
    <nut-divider
      :style="{ color: '#f9f9f9', borderColor: '#f9f9f9', margin: '5px 15px 5px 15px' }"
    ></nut-divider>
    <View class="worker-card-bottom">
      <View class="worker-card-bottom-content">
        <nut-ellipsis
          content="本人专业从事水电工,持有电工证. 电路故障维修,持有电工证,持有电工证,持有电工证,持有电工证,持有电工证"
          rows="2"
          direction="end"
        >
        </nut-ellipsis>
      </View>
      <View class="worker-card-bottom-tagbar">
        <View class="worker-card-bottom-tag">
          <nut-tag color="#f8f9fb" textColor="#787d83">标签</nut-tag>
        </View>
        <View class="worker-card-bottom-tag">
          <nut-tag color="#f8f9fb" textColor="#787d83">标签</nut-tag>
        </View>
        <View class="worker-card-bottom-tag">
          <nut-tag color="#f8f9fb" textColor="#787d83">标签</nut-tag>
        </View>
      </View>
    </View>
  </View>
</template>

<script lang="ts" setup>
import { View, Image } from '@tarojs/components'
import { protect, star, engineering_vehicle, location_two, worker_image } from '@/assets/index'
</script>

<style lang="scss">
@import '@/style/index.scss';

.worker-card {
  background-color: $base-item-background;
  justify-content: flex-start;
  border-radius: 20px;
  box-shadow: $base-box-shadow-xhm;
  margin: 20px 50px 25px 50px;
  padding: 10px;

  .worker-card-content {
    flex-direction: row;
    margin: 10px 0px 0px 10px;

    .worker-card-main {
      margin: 15px 15px 0px 15px;
      width: 70%;

      .worker-card-title {
        flex-direction: row;
        .worker-card-title-name {
          @include font-black-title();
          font-size: 33px;
          font-weight: bold;
        }
        .worker-card-title-tag {
          padding: 10px 10px 0px 10px;
          font-weight: bold;
        }
      }

      .worker-card-subtitle {
        margin: 5px 0px 0px 0px;
        flex-direction: row;

        .worker-card-subtitle-item {
          @include font-black-primary();
          font-size: 25px;
        }
      }

      .worker-card-refer {
        margin: 15px 0px 5px 0px;
        .worker-card-refer-item {
          flex-direction: row;
          align-items: center;
          .worker-card-refer-item-icon {
            width: 30px;
            height: 30px;
            margin-right: 5px;
          }

          .worker-card-refer-item-text {
            @include font-black-title();
            font-size: 27px;
          }
        }
      }
    }

    .worker-card-side {
      width: 30%;
      height: 100px;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      .worker-card-avatar-wrapper {
        .worker-card-avatar {
          width: 110px;
          height: 110px;
          border: 7px solid #fff;
          background-size: cover;
          background-position: center;
          border-radius: 100%;
        }
      }
      .worker-card-side-content {
        flex-direction: column;
        align-items: center;
        .worker-card-side-item {
          margin-right: 12px;
          flex-direction: row;
          align-items: center;
          justify-content: end;
          font-weight: bold;
          .worker-card-side-item-icon {
            width: 30px;
            height: 30px;
            margin-right: 5px;
          }
          .worker-card-side-item-text {
            @include font-black-title();
            font-size: 25px;
          }
        }
      }
    }
  }

  .worker-card-bottom {
    margin: 0px 25px 0px 25px;
    .worker-card-bottom-content {
      @include font-black-primary();
      font-size: 23px;
    }

    .worker-card-bottom-tagbar {
      flex-direction: row;

      .worker-card-bottom-tag {
        margin: 15px 5px 15px 8px;
      }

    }
  }
}
</style>
