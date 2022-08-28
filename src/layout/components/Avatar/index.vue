<template>
  <div class="mx-10px cursor-pointer">
    <n-dropdown :options="options" placement="bottom-end" class="mx-10px" @select="handleSelect">
      <div class="flex items-center">
        <n-avatar round src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        <span class="ml-5px">Admin</span>
      </div>
    </n-dropdown>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { NIcon } from 'naive-ui'
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
} from '@vicons/ionicons5'

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    })
  }
}

const options = [
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon(UserIcon),
  },
  {
    label: '修改密码',
    key: 'editPwd',
    icon: renderIcon(EditIcon),
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon),
  },
]

function handleSelect(key) {
  if (key === 'logout') {
    $dialog.warning({
      title: '提示',
      content: '确认退出？',
      positiveText: '确认',
      negativeText: '不确认',
      onPositiveClick: () => {
        $message.success('确定')
      },
      onNegativeClick: () => {
        $message.error('不确定')
      },
    })
  }
}
</script>
