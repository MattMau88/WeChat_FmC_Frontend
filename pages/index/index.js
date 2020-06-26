const app = getApp()

Page({
  data: {},

  // --- Custom Functions ---
  navigateToStories: function () {
    wx.switchTab({
      url: '/pages/stories/stories',
    })
  },

  // --- Lifecycle Functions ---
  onLoad: function () {
  },
  onHide: function () {
  },

  onReady: function () {}
})