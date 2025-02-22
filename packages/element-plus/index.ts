import type { App } from 'vue'
import ElAlert from '@element-plus/alert'
import ElAvatar from '@element-plus/avatar'
import ElBacktop from '@element-plus/backtop'
import ElButton from '@element-plus/button'
import ElBadge from '@element-plus/badge'
import ElCard from '@element-plus/card'
import ElCheckbox from '@element-plus/checkbox'
import ElDropdown from '@element-plus/dropdown'
import ElTag from '@element-plus/tag'
import ElLayout from '@element-plus/layout'
import ElDivider from '@element-plus/divider'
import ElCarousel from '@element-plus/carousel'
import ElTimeline from '@element-plus/timeline'
import ElProgress from '@element-plus/progress'
import ElBreadcrumb from '@element-plus/breadcrumb'
import ElIcon from '@element-plus/icon'
import ElImage from '@element-plus/image'
import ElLink from '@element-plus/link'
import ElRate from '@element-plus/rate'
import ElSwitch from '@element-plus/switch'
import ElContainer from '@element-plus/container'
import ElNotification from '@element-plus/notification'
import ElPageHeader from '@element-plus/page-header'
import ElRadio from '@element-plus/radio'
import ElScrollBar from '@element-plus/scrollbar'
import ElSteps from '@element-plus/steps'
import ElCollapse from '@element-plus/collapse'
import ElPopper from '@element-plus/popper'
import ElTimePicker from '@element-plus/time-picker'
import ElTabs from '@element-plus/tabs'
import ElTooltip from '@element-plus/tooltip'
import ElSlider from '@element-plus/slider'
import ElInput from '@element-plus/input'
import ElTransfer from '@element-plus/transfer'
import ElDialog from '@element-plus/dialog'
import ElCalendar from '@element-plus/calendar'
import ElInfiniteScroll from '@element-plus/infinite-scroll'
import ElDrawer from '@element-plus/drawer'

export {
  ElAlert,
  ElAvatar,
  ElBacktop,
  ElLayout,
  ElButton,
  ElBadge,
  ElCard,
  ElCheckbox,
  ElDivider,
  ElDropdown,
  ElTag,
  ElCarousel,
  ElTimeline,
  ElProgress,
  ElBreadcrumb,
  ElIcon,
  ElImage,
  ElLink,
  ElRate,
  ElSwitch,
  ElContainer,
  ElNotification,
  ElPageHeader,
  ElScrollBar,
  ElSteps,
  ElRadio,
  ElCollapse,
  ElTimePicker,
  ElTabs,
  ElTooltip,
  ElSlider,
  ElInput,
  ElTransfer,
  ElDialog,
  ElCalendar,
  ElInfiniteScroll,
  ElDrawer,
}

const install = (app: App): void =>  {
  ElAlert(app)
  ElAvatar(app)
  ElBacktop(app)
  ElButton(app)
  ElBadge(app)
  ElCard(app)
  ElCheckbox(app)
  ElDropdown(app)
  ElTag(app)
  ElLayout(app)
  ElDivider(app)
  ElCarousel(app)
  ElTimeline(app)
  ElProgress(app)
  ElBreadcrumb(app)
  ElIcon(app)
  ElImage(app)
  ElLink(app)
  ElRate(app)
  ElSwitch(app)
  ElContainer(app)
  ElNotification(app)
  ElPageHeader(app)
  ElScrollBar(app)
  ElSteps(app)
  ElRadio(app)
  ElCollapse(app)
  ElPopper(app)
  ElTimePicker(app)
  ElTabs(app)
  ElTooltip(app)
  ElSlider(app)
  ElInput(app)
  ElTransfer(app)
  ElDialog(app)
  ElCalendar(app)
  ElInfiniteScroll(app)
  ElDrawer(app)
}

const elementUI = {
  install,
}

export default elementUI
