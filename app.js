/**
 * FocusDock — Core Application Logic
 * Multi-language (i18n, Default English) • Custom Sound Uploader • Pomodoro State Machine
 */

const I18N = {
  en: {
    badge: 'EN',
    offlineBadge: '100% Offline',
    hotkeySpace: '<kbd>Space</kbd> Start/Pause',
    tabFocus: 'Focus',
    tabShortBreak: 'Short Break',
    tabLongBreak: 'Long Break',
    deepWorkLabel: 'DEEP WORK',
    shortBreakLabel: 'SHORT BREAK',
    longBreakLabel: 'LONG BREAK',
    sessionCount: (n) => `Session ${n} of 4`,
    startFocus: 'Start Focus',
    startBreak: 'Start Break',
    pause: 'Pause',
    statSessions: 'Sessions',
    statFocusTime: 'Focus Time',
    statStreak: 'Day Streak',
    onboardTitle: 'Welcome to FocusDock!',
    onboardDesc: 'Press <kbd>Space</kbd> to focus, pick ambient soundscapes on the right, or press <kbd>M</kbd> for compact Mini Dock.',
    onboardBtn: 'Got it!',
    mixerTitle: 'Ambient Soundscapes',
    mixerSubtitle: 'Procedural, infinite audio & custom sounds offline',
    addCustomSound: 'Add Custom Sound',
    stopAll: 'Stop All',
    sndNameBrown: 'Brown Noise',
    sndDescBrown: 'Deep rumble • Voice blocker',
    sndNameRain: 'Rain on Window',
    sndDescRain: 'Steady rain • Soothing drops',
    sndNameFire: 'Campfire Ember',
    sndDescFire: 'Warm embers • Wood crackles',
    sndNameAlpha: 'Alpha Waves (12Hz)',
    sndDescAlpha: 'Binaural beat • Deep flow state',
    sndNamePink: 'Pink Noise',
    sndDescPink: 'Balanced 1/f • Natural waterfall',
    sndNameWhite: 'White Noise',
    sndDescWhite: 'Full spectrum • Crisp focus',
    customSectionTitle: 'Your Custom Soundscapes',
    settingsTitle: 'FocusDock Settings',
    settingLanguage: 'Language',
    settingDurations: 'Timer Durations (Minutes)',
    fieldFocus: 'Focus',
    fieldShortBreak: 'Short Break',
    fieldLongBreak: 'Long Break',
    settingPreferences: 'Preferences',
    toggleAutoBreaks: 'Auto-start breaks',
    toggleSoundAlert: 'Tibetan bowl bell when completed',
    settingShortcuts: 'Keyboard Shortcuts',
    keySpace: 'Start / Pause timer',
    keyR: 'Reset current session',
    keyS: 'Skip to next session',
    keyM: 'Toggle Mini Dock mode',
    testBell: '🔔 Test Bell',
    saveChanges: 'Save Changes',
    appVersion: 'Version 2.4.4',
    privacyLink: 'Privacy Policy',
    resetDefaults: 'Reset to Defaults',
    addCustomModalTitle: 'Add Custom Ambient Sound',
    customSoundName: 'Sound Name',
    customSoundPlaceholder: 'e.g. Cozy Cafe, Cat Purring, Lo-Fi Beat...',
    chooseAudio: 'Audio File (MP3, WAV, OGG, M4A, FLAC)',
    dropzonePrompt: 'Click or drag & drop audio file here',
    cancel: 'Cancel',
    addSoundBtn: 'Add Sound',
    badgeBreakTip: 'Mindful Break',
    badgeFocusTip: 'Focus Strategy',
    toastCelebration: (n) => `🎉 Focus completed! Streak: ${n} session${n > 1 ? 's' : ''} today! 🔥`,
    resetEncouragement: "🌱 It's okay! Take a deep breath and start fresh whenever you're ready.",
    inputGoalPlaceholder: 'What is your focus goal for this session? (e.g. Finish report)',
    customDurationPrompt: 'Enter session duration in minutes (1 - 180):',
    goalAchievedToast: (goal, n) => `🎯 Goal achieved: "${goal}"! Streak: ${n} session${n > 1 ? 's' : ''} today! 🔥`,
    customChipLabel: '⏱️ Custom',
    celebrationBadge: '🎉 SESSION COMPLETED',
    celebrationTitle: 'Fantastic Focus! Time to Recharge 🎉',
    celebrationSubtitle: 'Release tension, rest your eyes, and nourish your mind.',
    goalHighlightLabel: 'Session Goal:',
    celebrationSessionsLabel: 'Sessions today',
    celebrationFocusTimeLabel: 'Focus time',
    celebrationStreakLabel: 'Day streak',
    btnTakeBreakLabel: 'Start Break Now (Space / Enter)',
    btnDismissCelebration: 'Dismiss (Esc)',
    toggleDesktopNotif: 'Windows desktop notifications',
    desktopNotifSessionTitle: (goal) => goal ? `🎯 Goal Achieved: "${goal}"` : `🎉 Focus Session Completed!`,
    desktopNotifSessionBody: (streak, mins) => `Streak: ${streak} session${streak > 1 ? 's' : ''} today (${mins}m). Time for a mindful break! ☕`,
    tabFlashComplete: 'SESSION COMPLETE! Time to recharge ☕',
    btnOpenRemindersTitle: 'Daily Reminders & Alarms',
    lblRemindersModalTitle: '⏰ Daily Reminders & Alarms',
    lblAddReminderSection: 'Add Daily Reminder',
    lblReminderTimeField: 'Time (24h)',
    lblReminderTitleField: 'Activity Name',
    reminderTitlePlaceholder: 'e.g. Go to gym, Drink water, Read...',
    lblQuickChipsLabel: 'Quick Presets:',
    lblReminderDaysField: 'Repeat',
    daysOptionDaily: 'Everyday (All days)',
    daysOptionWeekdays: 'Weekdays (Mon - Fri)',
    daysOptionWeekends: 'Weekends (Sat - Sun)',
    btnAddReminder: '+ Add Reminder',
    lblActiveRemindersTitle: 'Your Scheduled Reminders',
    btnDoneReminders: 'Done',
    noRemindersText: 'No reminders set yet.',
    addSampleGymBtn: '🏋️‍♂️ Add Sample: 16:00 Gym Workout',
    lblReminderAlarmBadge: '⏰ DAILY SCHEDULED REMINDER',
    reminderAlarmSubtitle: (time, title) => `It is ${time}! Time to step away from the screen and ${title}! 💪`,
    btnReminderAlarmDone: 'Done / Start Now',
    btnReminderAlarmSnooze: 'Snooze 5 Mins',
    desktopNotifReminderTitle: (title, time) => `⏰ Reminder: ${title} (${time})`,
    desktopNotifReminderBody: (title, time) => `It's ${time}! Time for ${title}! Take a break and get moving! 💪`,
    tabFlashReminder: (title, time) => `REMINDER: ${title} (${time}) ⏰`,
    snoozeToastText: (title) => `💤 "${title}" snoozed for 5 minutes.`,
    lblToggleWindowsStartup: 'Start with Windows',
    subToggleWindowsStartup: 'Launch FocusDock automatically when your PC boots',
    toastStartupEnabled: '✓ FocusDock will now start automatically with Windows!',
    toastStartupDisabled: '✓ Windows auto-startup disabled.',
    lblToggleRepeatAlarm: 'Repeat alarm chime until passed',
    subToggleRepeatAlarm: 'Chime rings repeatedly every 7 seconds until you click to pass or dismiss',
    lblRingingRepeatText: 'Chiming repeatedly until dismissed...',
    lblCelebrationRingingText: 'Chiming repeatedly until you start break or pass...',
    lblFocusReadyBadge: '🎯 BREAK IS OVER',
    lblFocusReadyTitle: 'Ready to Focus!',
    lblFocusReadySubtitle: 'Break time has ended. Energize yourself and dive into your next session! 🚀',
    lblFocusReadyGoalLabel: 'Next Intention:',
    lblBtnFocusReadyStart: 'Start Focus Now (Space / Enter)',
    lblBtnFocusReadySnooze: 'Snooze Break (2 Mins)',
    lblFocusReadyRingingText: 'Chiming repeatedly until you start focus or pass...',
    toastFocusStarted: '🚀 New focus session started! Stay in the zone! 💪',
    toastBreakSnoozed: '☕ Break extended by 2 minutes.',
    desktopNotifFocusReadyTitle: '⚡ Time to Focus!',
    desktopNotifFocusReadyBody: 'Break time is over. Return to your desk and dive in! 🎯',
    tabFlashFocusReady: '⚡ [TIME TO FOCUS!] FocusDock',
    lblPauseAll: '⏸ Pause All',
    lblResumeAll: '▶ Resume All'
  },
  vi: {
    badge: 'VI',
    offlineBadge: '100% Ngoại tuyến',
    hotkeySpace: '<kbd>Phím cách</kbd> Chạy/Dừng',
    tabFocus: 'Tập trung',
    tabShortBreak: 'Nghỉ ngắn',
    tabLongBreak: 'Nghỉ dài',
    deepWorkLabel: 'TẬP TRUNG SÂU',
    shortBreakLabel: 'NGHỈ NGẮN',
    longBreakLabel: 'NGHỈ DÀI',
    sessionCount: (n) => `Phiên ${n} / 4`,
    startFocus: 'Bắt đầu tập trung',
    startBreak: 'Bắt đầu nghỉ',
    pause: 'Tạm dừng',
    statSessions: 'Phiên',
    statFocusTime: 'Thời gian',
    statStreak: 'Chuỗi ngày',
    onboardTitle: 'Chào mừng bạn đến với FocusDock!',
    onboardDesc: 'Nhấn <kbd>Phím cách</kbd> để bắt đầu, chọn âm thanh thư giãn bên phải hoặc bấm <kbd>M</kbd> để thu nhỏ Mini Dock.',
    onboardBtn: 'Đã hiểu!',
    mixerTitle: 'Âm thanh môi trường',
    mixerSubtitle: 'Âm thanh thuật toán & tuỳ chỉnh 100% không cần mạng',
    addCustomSound: 'Thêm âm thanh riêng',
    stopAll: 'Tắt tất cả',
    sndNameBrown: 'Tiếng ồn nâu (Brown Noise)',
    sndDescBrown: 'Rung trầm sâu • Khử tiếng nói chuyện',
    sndNameRain: 'Mưa rơi bên cửa sổ',
    sndDescRain: 'Mưa rào êm ả • Giọt nước tí tách',
    sndNameFire: 'Lửa trại đêm',
    sndDescFire: 'Hơi ấm than hồng • Tiếng củi nổ',
    sndNameAlpha: 'Sóng não Alpha (12Hz)',
    sndDescAlpha: 'Sóng nhịp đôi • Trạng thái Flow state',
    sndNamePink: 'Tiếng ồn hồng (Pink Noise)',
    sndDescPink: 'Cân bằng 1/f • Tiếng thác nước êm',
    sndNameWhite: 'Tiếng ồn trắng (White Noise)',
    sndDescWhite: 'Phổ đầy đủ • Tăng tập trung cao độ',
    customSectionTitle: 'Âm thanh tùy chỉnh của bạn',
    settingsTitle: 'Cài đặt FocusDock',
    settingLanguage: 'Ngôn ngữ (Language)',
    settingDurations: 'Thời lượng hẹn giờ (Phút)',
    fieldFocus: 'Tập trung',
    fieldShortBreak: 'Nghỉ ngắn',
    fieldLongBreak: 'Nghỉ dài',
    settingPreferences: 'Tùy chọn hoạt động',
    toggleAutoBreaks: 'Tự động bắt đầu giờ nghỉ',
    toggleSoundAlert: 'Chuông bát Tây Tạng khi hoàn thành',
    settingShortcuts: 'Bảng phím tắt nhanh',
    keySpace: 'Bắt đầu / Tạm dừng hẹn giờ',
    keyR: 'Đặt lại phiên hiện tại',
    keyS: 'Chuyển nhanh sang phiên tiếp',
    keyM: 'Bật/tắt thanh Mini Dock thu nhỏ',
    testBell: '🔔 Nghe thử chuông',
    saveChanges: 'Lưu thay đổi',
    appVersion: 'Phiên bản 2.4.4',
    privacyLink: 'Chính sách bảo mật',
    resetDefaults: 'Đặt lại mặc định',
    addCustomModalTitle: 'Thêm âm thanh môi trường riêng',
    customSoundName: 'Tên âm thanh',
    customSoundPlaceholder: 'Ví dụ: Quán cafe quen, Tiếng mèo thở, Lo-Fi Beat...',
    chooseAudio: 'File âm thanh (MP3, WAV, OGG, M4A, FLAC)',
    dropzonePrompt: 'Nhấp chuột hoặc kéo thả file âm thanh vào đây',
    cancel: 'Hủy',
    addSoundBtn: 'Thêm âm thanh',
    badgeBreakTip: 'Nghỉ ngơi tái tạo',
    badgeFocusTip: 'Bí quyết tập trung',
    toastCelebration: (n) => `🎉 Hoàn thành phiên! Chuỗi hôm nay: ${n} phiên! 🔥`,
    resetEncouragement: '🌱 Không sao cả! Hít một hơi thật sâu và bắt đầu lại khi bạn đã sẵn sàng nhé.',
    inputGoalPlaceholder: 'Mục tiêu phiên này của bạn là gì? (vd: Viết báo cáo, Đọc sách...)',
    customDurationPrompt: 'Nhập thời gian phiên tính theo phút (1 - 180):',
    goalAchievedToast: (goal, n) => `🎯 Đã hoàn thành mục tiêu: "${goal}"! Chuỗi hôm nay: ${n} phiên! 🔥`,
    customChipLabel: '⏱️ Tùy chỉnh',
    celebrationBadge: '🎉 PHIÊN TẬP TRUNG HOÀN THÀNH',
    celebrationTitle: 'Xuất sắc! Bạn đã hoàn thành trọn vẹn! 🎉',
    celebrationSubtitle: 'Đã đến lúc giải phóng năng lượng và chăm sóc cơ thể.',
    goalHighlightLabel: 'Mục tiêu phiên:',
    celebrationSessionsLabel: 'Phiên hôm nay',
    celebrationFocusTimeLabel: 'Thời gian tập trung',
    celebrationStreakLabel: 'Chuỗi ngày',
    btnTakeBreakLabel: 'Bắt đầu nghỉ ngơi ngay (Space / Enter)',
    btnDismissCelebration: 'Đóng lại (Esc)',
    toggleDesktopNotif: 'Thông báo nổi trên màn hình Windows',
    desktopNotifSessionTitle: (goal) => goal ? `🎯 Đã đạt mục tiêu: "${goal}"` : `🎉 Phiên tập trung hoàn thành!`,
    desktopNotifSessionBody: (streak, mins) => `Chuỗi hôm nay: ${streak} phiên (${mins} phút). Đứng dậy uống nước & thư giãn nhé! ☕`,
    tabFlashComplete: 'HOÀN THÀNH PHIÊN! Đã đến giờ nghỉ ngơi ☕',
    btnOpenRemindersTitle: 'Nhắc nhở hàng ngày & Báo thức',
    lblRemindersModalTitle: '⏰ Nhắc nhở hàng ngày (Daily Reminders)',
    lblAddReminderSection: 'Thêm nhắc nhở mới',
    lblReminderTimeField: 'Giờ nhắc (24h)',
    lblReminderTitleField: 'Tên hoạt động',
    reminderTitlePlaceholder: 'Ví dụ: Tập gym lúc 4h chiều, Uống nước...',
    lblQuickChipsLabel: 'Mẫu nhanh:',
    lblReminderDaysField: 'Lặp lại',
    daysOptionDaily: 'Hàng ngày (Tất cả các ngày)',
    daysOptionWeekdays: 'Thứ 2 - Thứ 6 (Ngày làm việc)',
    daysOptionWeekends: 'Thứ 7 - Chủ Nhật (Cuối tuần)',
    btnAddReminder: '+ Thêm nhắc nhở',
    lblActiveRemindersTitle: 'Danh sách nhắc nhở đã đặt',
    btnDoneReminders: 'Xong',
    noRemindersText: 'Chưa có lời nhắc nào được cài đặt.',
    addSampleGymBtn: '🏋️‍♂️ Thêm mẫu: 16:00 Đi tập gym',
    lblReminderAlarmBadge: '⏰ ĐÃ ĐẾN GIỜ NHẮC NHỞ HÀNG NGÀY',
    reminderAlarmSubtitle: (time, title) => `Đã đúng ${time} rồi! Hãy tạm gác công việc và ${title} thôi nào! 💪`,
    btnReminderAlarmDone: 'Bắt đầu ngay / Hoàn thành',
    btnReminderAlarmSnooze: 'Nhắc lại sau 5 phút',
    desktopNotifReminderTitle: (title, time) => `⏰ Nhắc nhở: ${title} (${time})`,
    desktopNotifReminderBody: (title, time) => `Đã đúng ${time} rồi! Đến giờ ${title} rồi nhé! 💪`,
    tabFlashReminder: (title, time) => `NHẮC NHỞ: ${title} (${time}) ⏰`,
    snoozeToastText: (title) => `💤 Đã hoãn nhắc nhở "${title}" trong 5 phút.`,
    lblToggleWindowsStartup: 'Khởi động cùng Windows',
    subToggleWindowsStartup: 'Tự động mở FocusDock khi bật máy tính',
    toastStartupEnabled: '✓ Đã bật khởi động cùng Windows!',
    toastStartupDisabled: '✓ Đã tắt khởi động cùng Windows.',
    lblToggleRepeatAlarm: 'Chuông báo reo lặp lại nhiều lần',
    subToggleRepeatAlarm: 'Reo lại mỗi 7 giây cho đến khi bạn bấm xác nhận hoặc bỏ qua',
    lblRingingRepeatText: 'Chuông đang reo lặp lại cho đến khi bạn bấm qua...',
    lblCelebrationRingingText: 'Chuông đang reo lặp lại cho đến khi bạn bấm bắt đầu nghỉ hoặc bỏ qua...',
    lblFocusReadyBadge: '🎯 ĐÃ HẾT GIỜ NGHỈ NGƠI',
    lblFocusReadyTitle: 'Sẵn sàng tập trung nào!',
    lblFocusReadySubtitle: 'Thời gian nghỉ đã kết thúc. Hãy nạp năng lượng và bắt đầu phiên làm việc mới! 🚀',
    lblFocusReadyGoalLabel: 'Mục tiêu tiếp theo:',
    lblBtnFocusReadyStart: 'Bắt đầu tập trung ngay (Space / Enter)',
    lblBtnFocusReadySnooze: 'Nghỉ thêm 2 phút',
    lblFocusReadyRingingText: 'Chuông đang reo lặp lại cho đến khi bạn bấm bắt đầu tập trung...',
    toastFocusStarted: '🚀 Bắt đầu phiên tập trung mới! Hãy giữ vững năng lượng nhé! 💪',
    toastBreakSnoozed: '☕ Đã gia hạn nghỉ ngơi thêm 2 phút.',
    desktopNotifFocusReadyTitle: '⚡ Đã đến phiên tập trung!',
    desktopNotifFocusReadyBody: 'Thời gian nghỉ ngơi đã hết. Hãy quay lại bàn làm việc và bắt đầu phiên mới nào! 🎯',
    tabFlashFocusReady: '⚡ [ĐẾN PHIÊN TẬP TRUNG!] FocusDock',
    lblPauseAll: '⏸ Tạm dừng',
    lblResumeAll: '▶ Tiếp tục phát'
  },
  ja: {
    badge: 'JA',
    offlineBadge: '100% オフライン',
    hotkeySpace: '<kbd>Space</kbd> 開始/一時停止',
    tabFocus: '集中',
    tabShortBreak: '小休憩',
    tabLongBreak: '長休憩',
    deepWorkLabel: 'ディープワーク',
    shortBreakLabel: '小休憩',
    longBreakLabel: '長休憩',
    sessionCount: (n) => `セッション ${n} / 4`,
    startFocus: '集中を開始',
    startBreak: '休憩を開始',
    pause: '一時停止',
    statSessions: 'セッション',
    statFocusTime: '集中時間',
    statStreak: '連続日数',
    onboardTitle: 'FocusDock へようこそ！',
    onboardDesc: '<kbd>Space</kbd> で集中を開始、右側で環境音を選択、または <kbd>M</kbd> キーでミニドックに切り替えられます。',
    onboardBtn: '了解！',
    mixerTitle: '環境音ミキサー',
    mixerSubtitle: 'オフライン完全動作の環境音＆カスタム音',
    addCustomSound: 'カスタム音を追加',
    stopAll: 'すべて停止',
    sndNameBrown: 'ブラウンノイズ',
    sndDescBrown: '深い低周波 • 雑音カット',
    sndNameRain: '雨の音',
    sndDescRain: '窓を打つ雨 • 心地よい水滴音',
    sndNameFire: '焚き火',
    sndDescFire: '暖かい残り火 • 薪のはぜる音',
    sndNameAlpha: 'アルファ波 (12Hz)',
    sndDescAlpha: 'バイノーラルビート • ゾーンに入る',
    sndNamePink: 'ピンクノイズ',
    sndDescPink: '1/f ゆらぎ • 自然な滝の音',
    sndNameWhite: 'ホワイトノイズ',
    sndDescWhite: 'フルスペクトラム • 集中力UP',
    customSectionTitle: 'カスタムサウンド',
    settingsTitle: 'FocusDock 設定',
    settingLanguage: '言語 (Language)',
    settingDurations: 'タイマー時間（分）',
    fieldFocus: '集中',
    fieldShortBreak: '小休憩',
    fieldLongBreak: '長休憩',
    settingPreferences: '環境設定',
    toggleAutoBreaks: '休憩を自動開始',
    toggleSoundAlert: '完了時にシンギングボウルの鐘を鳴らす',
    settingShortcuts: 'ショートカットキー',
    keySpace: 'タイマー開始 / 一時停止',
    keyR: 'セッションをリセット',
    keyS: '次のセッションにスキップ',
    keyM: 'ミニドック表示の切り替え',
    testBell: '🔔 チャイム試聴',
    saveChanges: '設定を保存',
    appVersion: 'バージョン 2.4.4',
    privacyLink: 'プライバシーポリシー',
    resetDefaults: 'デフォルトに戻す',
    addCustomModalTitle: 'カスタム環境音の追加',
    customSoundName: 'サウンド名',
    customSoundPlaceholder: '例: カフェの雑音、波の音、Lo-Fi...',
    chooseAudio: '音声ファイル (MP3, WAV, OGG, M4A, FLAC)',
    dropzonePrompt: 'クリックまたは音声ファイルをドラッグ＆ドロップ',
    cancel: 'キャンセル',
    addSoundBtn: 'サウンドを追加',
    badgeBreakTip: 'マインドフル休憩',
    badgeFocusTip: '集中メソッド',
    toastCelebration: (n) => `🎉 集中完了！今日 ${n} 回目のセッション達成！🔥`,
    resetEncouragement: '🌱 大丈夫です！深呼吸して、準備ができたらまた始めましょう。',
    inputGoalPlaceholder: '今回のセッションの目標は何ですか？ (例: 資料作成、読書)',
    customDurationPrompt: 'セッションの時間を分単位で入力 (1 - 180):',
    goalAchievedToast: (goal, n) => `🎯 目標達成: 「${goal}」！今日 ${n} 回目のセッション！🔥`,
    customChipLabel: '⏱️ カスタム',
    celebrationBadge: '🎉 セッション完了',
    celebrationTitle: '素晴らしい集中力！休憩の時間です 🎉',
    celebrationSubtitle: '目を休めて、深く息を吸ってリフレッシュしましょう。',
    goalHighlightLabel: 'セッション目標:',
    celebrationSessionsLabel: '今日のセッション',
    celebrationFocusTimeLabel: '集中時間',
    celebrationStreakLabel: '連続記録',
    btnTakeBreakLabel: '今すぐ休憩を開始 (Space / Enter)',
    btnDismissCelebration: '閉じる (Esc)',
    toggleDesktopNotif: 'Windows デスクトップ通知',
    desktopNotifSessionTitle: (goal) => goal ? `🎯 目標達成: 「${goal}」` : `🎉 集中セッション完了！`,
    desktopNotifSessionBody: (streak, mins) => `今日 ${streak} 回目の達成 (合計 ${mins} 分)。水分補給と休憩を！ ☕`,
    tabFlashComplete: 'セッション完了！リフレッシュしましょう ☕',
    btnOpenRemindersTitle: 'デイリーリマインダー＆アラーム',
    lblRemindersModalTitle: '⏰ デイリーリマインダー',
    lblAddReminderSection: '新しいリマインダーを追加',
    lblReminderTimeField: '時間 (24時間)',
    lblReminderTitleField: 'アクティビティ名',
    reminderTitlePlaceholder: '例: ジムで筋トレ、水分補給、読書...',
    lblQuickChipsLabel: 'クイックプリセット:',
    lblReminderDaysField: '繰り返し',
    daysOptionDaily: '毎日 (全曜日)',
    daysOptionWeekdays: '平日 (月〜金)',
    daysOptionWeekends: '週末 (土日)',
    btnAddReminder: '+ リマインダーを追加',
    lblActiveRemindersTitle: '設定済みリマインダー一覧',
    btnDoneReminders: '完了',
    noRemindersText: '設定されたリマインダーはありません。',
    addSampleGymBtn: '🏋️‍♂️ サンプル追加: 16:00 ジムで筋トレ',
    lblReminderAlarmBadge: '⏰ リマインダーの時間です',
    reminderAlarmSubtitle: (time, title) => `${time} になりました！一度作業を止めて、${title} の時間です！ 💪`,
    btnReminderAlarmDone: '今すぐ開始 / 完了',
    btnReminderAlarmSnooze: '5分後に再通知',
    desktopNotifReminderTitle: (title, time) => `⏰ リマインダー: ${title} (${time})`,
    desktopNotifReminderBody: (title, time) => `${time} です！${title} の時間になりました！ 💪`,
    tabFlashReminder: (title, time) => `リマインダー: ${title} (${time}) ⏰`,
    snoozeToastText: (title) => `💤 「${title}」を5分間スヌーズしました。`,
    lblToggleWindowsStartup: 'Windows起動時に自動起動',
    subToggleWindowsStartup: 'PC起動時にFocusDockを自動的に起動します',
    toastStartupEnabled: '✓ Windows起動時の自動起動を有効にしました！',
    toastStartupDisabled: '✓ Windows起動時の自動起動を無効にしました。',
    lblToggleRepeatAlarm: '確認するまでアラームを繰り返し鳴らす',
    subToggleRepeatAlarm: 'パスまたは閉じるまで7秒ごとにチャイムが鳴り続けます',
    lblRingingRepeatText: '確認されるまで繰り返し鳴動中...',
    lblCelebrationRingingText: '休憩開始または閉じるまで繰り返し鳴動中...',
    lblFocusReadyBadge: '🎯 休憩時間が終了しました',
    lblFocusReadyTitle: '集中セッションを始めましょう！',
    lblFocusReadySubtitle: '休憩時間が終わりました。次のセッションに向けて集中しましょう！ 🚀',
    lblFocusReadyGoalLabel: '次の目標:',
    lblBtnFocusReadyStart: '今すぐ集中を開始 (Space / Enter)',
    lblBtnFocusReadySnooze: 'あと2分休憩する',
    lblFocusReadyRingingText: '集中開始または閉じるまで繰り返し鳴動中...',
    toastFocusStarted: '🚀 新しい集中セッションを開始しました！頑張りましょう！ 💪',
    toastBreakSnoozed: '☕ 休憩を2分間延長しました。',
    desktopNotifFocusReadyTitle: '⚡ 集中セッションの時間です！',
    desktopNotifFocusReadyBody: '休憩が終了しました。デスクに戻って集中セッションを開始しましょう！ 🎯',
    tabFlashFocusReady: '⚡ [集中の時間です！] FocusDock',
    lblPauseAll: '⏸ すべて一時停止',
    lblResumeAll: '▶ すべて再開'
  }
};

const BREAK_ACTIVITIES = [
  {
    id: 'hydrate',
    icon: '💧',
    title: {
      en: 'Time to Hydrate!',
      vi: 'Đến lúc uống nước rồi!',
      ja: '水分補給の時間です！'
    },
    desc: {
      en: 'Drink a glass of water to replenish your brain and refresh your body.',
      vi: 'Uống một ly nước lọc đầy để bù nước và giúp não bộ tỉnh táo trở lại.',
      ja: 'コップ1杯の水を飲んで、脳と身体をリフレッシュしましょう。'
    }
  },
  {
    id: 'stretch',
    icon: '🧘',
    title: {
      en: 'Stand Up & Stretch',
      vi: 'Vươn vai & Thể dục kéo giãn',
      ja: '立ち上がってストレッチ'
    },
    desc: {
      en: 'Stand up, roll shoulders back, and reach your arms high up to open chest.',
      vi: 'Đứng dậy, xoay khớp vai và vươn căng hai tay lên cao để giải phóng cơ bắp.',
      ja: '立ち上がって肩を回し、両手を大きく上に伸ばして背筋を伸ばしましょう。'
    }
  },
  {
    id: 'eyes',
    icon: '👁️',
    title: {
      en: '20-20-20 Eye Relaxation',
      vi: 'Nhìn xa thư giãn mắt (20-20-20)',
      ja: '20-20-20 目の休憩法'
    },
    desc: {
      en: 'Look at an object 20 feet (6m) away for 20 seconds to ease optical strain.',
      vi: 'Nhìn vào một điểm xa khoảng 6 mét (ngoài cửa sổ) trong 20 giây để giảm mỏi mắt.',
      ja: '20秒間、約6メートル先の遠くを見つめて目の筋肉の緊張をほぐしましょう。'
    }
  },
  {
    id: 'breathe',
    icon: '🌬️',
    title: {
      en: 'Deep Box Breathing',
      vi: 'Hít thở sâu nhịp 4-4-4',
      ja: 'ボックス深呼吸（4-4-4）'
    },
    desc: {
      en: 'Inhale deeply for 4s, hold for 4s, and exhale smoothly for 4s.',
      vi: 'Hít vào thật sâu 4 giây, giữ hơi 4 giây, và thở ra từ từ 4 giây để hạ nhịp tim.',
      ja: '4秒かけて息を吸い、4秒息を止め、4秒かけてゆっくり吐き出します。'
    }
  },
  {
    id: 'walk',
    icon: '🚶',
    title: {
      en: 'Take a Mindful Walk',
      vi: 'Đi lại vận động nhẹ',
      ja: '歩いてリフレッシュ'
    },
    desc: {
      en: 'Step away from your screen and take a short 2-minute walk around.',
      vi: 'Rời khỏi ghế và đi lại quanh phòng 2 phút để kích thích tuần hoàn máu.',
      ja: 'デスクから離れて部屋の中を軽く歩き、血行を促進しましょう。'
    }
  },
  {
    id: 'wrist',
    icon: '💆',
    title: {
      en: 'Wrist & Neck Relief',
      vi: 'Xoay cổ tay & Thư giãn cổ gáy',
      ja: '手首＆首のリラックス'
    },
    desc: {
      en: 'Rotate wrists and tilt neck slowly to relieve stiffness from typing.',
      vi: 'Xoay nhẹ hai cổ tay và nghiêng cổ từ từ để tránh đau mỏi vai gáy sau giờ làm việc.',
      ja: '首をゆっくり回し、手首をほぐしてタイピングの疲れを取りましょう。'
    }
  },
  {
    id: 'zen',
    icon: '🍵',
    title: {
      en: 'Mindful Stillness',
      vi: 'Tĩnh tâm giải tỏa căng thẳng',
      ja: 'マインドフルネスのひと息'
    },
    desc: {
      en: 'Close your eyes, clear your thoughts, and take three calm, slow breaths.',
      vi: 'Nhắm mắt lại, thả lỏng toàn bộ cơ mặt và hít thở nhẹ nhàng để tâm trí tĩnh lặng.',
      ja: '目を閉じて深く息を吸い、頭の中を空っぽにしてリセットしましょう。'
    }
  }
];

const FOCUS_TIPS = [
  {
    icon: '🎯',
    title: {
      en: 'Deep Focus Flow',
      vi: 'Trạng thái Tập trung cao độ',
      ja: 'ディープワーク・集中'
    },
    desc: {
      en: 'Silence notifications and commit to one single task until the bell rings.',
      vi: 'Tắt thông báo phiền nhiễu và dồn 100% năng lượng cho nhiệm vụ quan trọng.',
      ja: '通知をオフにして、1つのタスクに集中力を注ぎましょう。'
    }
  },
  {
    icon: '🎧',
    title: {
      en: 'Acoustic Cocoon',
      vi: 'Không gian âm thanh tối ưu',
      ja: '集中サウンド空間'
    },
    desc: {
      en: 'Combine Brown Noise & Rain to create an acoustic bubble that blocks distractions.',
      vi: 'Bật kết hợp tiếng ồn Nâu và tiếng Mưa để tạo vòm âm thanh khử tạp âm xung quanh.',
      ja: 'ブラウンノイズと雨音を組み合わせて、周囲の雑音を遮断しましょう。'
    }
  },
  {
    icon: '⚡',
    title: {
      en: 'One Step at a Time',
      vi: 'Chia nhỏ mục tiêu',
      ja: '小さな一歩から'
    },
    desc: {
      en: 'Break complex challenges into small, actionable milestones for steady progress.',
      vi: 'Chia nhỏ công việc phức tạp thành từng bước hành động nhỏ để duy trì nhịp độ.',
      ja: '大きな課題は小さなステップに分解して、着実に進めましょう。'
    }
  }
];

// ----------------------------------------------------------------------------
// Zero-Dependency Offline Confetti Particle Celebration
// ----------------------------------------------------------------------------
class ConfettiEffect {
  constructor(canvas) {
    this.canvas = canvas;
    if (!this.canvas) return;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.animationId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 90) {
    if (!this.canvas || !this.ctx) return;
    this.resize();
    const colors = ['#6366f1', '#a855f7', '#ec4899', '#10b981', '#06b6d4', '#f59e0b', '#3b82f6'];
    const originX = this.canvas.width / 2;
    const originY = this.canvas.height * 0.35;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
      const velocity = 8 + Math.random() * 12;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 4,
        size: 7 + Math.random() * 7,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        opacity: 1,
        shape: Math.random() > 0.4 ? 'rect' : 'circle',
        decay: 0.01 + Math.random() * 0.008
      });
    }

    if (!this.animationId) {
      this.loop();
    }
  }

  loop() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.28; // gravity
      p.vx *= 0.985;
      p.rotation += p.rotationSpeed;
      p.opacity -= p.decay;

      if (p.opacity <= 0 || p.y > this.canvas.height + 25) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animationId = requestAnimationFrame(() => this.loop());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.animationId = null;
    }
  }
}

class FocusDockApp {
  constructor() {
    this.CIRCUMFERENCE = 2 * Math.PI * 120; // 753.9822

    // Default Configuration (Default Language: English)
    this.settings = {
      lang: 'en',
      focusTime: 25,
      shortBreak: 5,
      longBreak: 15,
      autoStartBreaks: false,
      soundAlert: true,
      desktopNotif: true,
      windowsStartup: false,
      repeatAlarm: true,
      theme: 'dark',
      soundVolumes: {}   // { brown: 60, rain: 60, ... } — persisted per sound
    };

    // State
    this.currentMode = 'focus';
    this.totalSeconds = this.settings.focusTime * 60;
    this.remainingSeconds = this.totalSeconds;
    this.isRunning = false;
    this.timerInterval = null;
    this.sessionCount = 1;
    this.isMiniMode = false;

    // Custom Sounds Cache
    this.customSoundsList = [];
    this.pendingAudioBlob = null;

    // Daily Stats
    this.stats = {
      date: new Date().toDateString(),
      completedSessions: 0,
      totalFocusSeconds: 0,
      streak: 1
    };

    // All-time Stats (never reset)
    this.allTimeStats = {
      totalSessions: 0,
      totalFocusSeconds: 0,
      bestStreak: 1
    };

    // Health Break Tips & Celebration
    this.currentTip = null;
    this.currentTipType = 'focus';
    this.toastTimeout = null;
    this.celebrationDismissTimeout = null;
    this.titleFlashInterval = null;

    // Session Goal
    this.sessionGoal = '';

    // Daily Reminders & Alarms State
    this.reminders = [];
    this.snoozedReminders = [];
    this.selectedReminderIcon = '🏋️‍♂️';
    this.activeAlarmReminder = null;
    this.reminderCheckerInterval = null;

    // Alarm Chime Loop State (Repeated chimes until passed)
    this.activeReminderChimeInterval = null;
    this.reminderChimeCount = 0;
    this.activeCelebrationChimeInterval = null;
    this.celebrationChimeCount = 0;
    this.activeFocusReadyChimeInterval = null;
    this.focusReadyChimeCount = 0;

    // Windows Startup State
    this.windowsStartupEnabled = false;

    // Ambient Sound Tracker
    this.soundTrackerInterval = null;

    this.init();
  }

  async init() {
    this.loadStorage();
    this.initElements();
    this.confetti = new ConfettiEffect(document.getElementById('confettiCanvas'));
    this.loadReminders();
    this.applyLanguage(this.settings.lang);
    this.bindEvents();
    this.updateTipCard(this.currentMode);
    this.updateDurationChips(this.settings.focusTime);
    this.updateDisplay();
    this.updateStatsDisplay();
    this.handleUrlParams();
    this.startReminderChecker();
    this.checkWindowsStartup();
    await this.loadCustomSounds();
    this.restoreSoundVolumes();
    this.checkFirstRun();
  }

  // --------------------------------------------------------------------------
  // Storage & Persistence
  // --------------------------------------------------------------------------
  loadStorage() {
    try {
      const savedSettings = localStorage.getItem('focusdock_settings');
      if (savedSettings) {
        this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
      }

      const savedStats = localStorage.getItem('focusdock_stats');
      const today = new Date().toDateString();
      if (savedStats) {
        const parsed = JSON.parse(savedStats);
        if (parsed.date === today) {
          this.stats = parsed;
        } else {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const wasYesterday = parsed.date === yesterday.toDateString();
          this.stats = {
            date: today,
            completedSessions: 0,
            totalFocusSeconds: 0,
            streak: wasYesterday && parsed.completedSessions > 0 ? (parsed.streak || 1) + 1 : 1
          };
          this.saveStats();
        }
      }

      // Load all-time stats
      try {
        const savedAllTime = localStorage.getItem('focusdock_alltime');
        if (savedAllTime) {
          this.allTimeStats = { ...this.allTimeStats, ...JSON.parse(savedAllTime) };
        }
      } catch (e) {}
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }

    document.documentElement.setAttribute('data-theme', this.settings.theme);
    this.totalSeconds = this.settings.focusTime * 60;
    this.remainingSeconds = this.totalSeconds;
  }

  saveSettings() {
    try {
      localStorage.setItem('focusdock_settings', JSON.stringify(this.settings));
    } catch (e) {}
  }

  saveStats() {
    try {
      localStorage.setItem('focusdock_stats', JSON.stringify(this.stats));
      // Keep best streak in all-time stats
      if (this.stats.streak > (this.allTimeStats.bestStreak || 1)) {
        this.allTimeStats.bestStreak = this.stats.streak;
      }
    } catch (e) {}
  }

  saveAllTimeStats() {
    try {
      localStorage.setItem('focusdock_alltime', JSON.stringify(this.allTimeStats));
    } catch (e) {}
  }

  // Restore saved volume levels for each sound card
  restoreSoundVolumes() {
    const vols = this.settings.soundVolumes || {};
    document.querySelectorAll('.sound-volume[data-sound]').forEach(slider => {
      const key = slider.dataset.sound;
      if (vols[key] !== undefined) {
        slider.value = vols[key];
      }
    });
  }

  // First-run onboarding: show tooltip overlay once
  checkFirstRun() {
    const seen = localStorage.getItem('focusdock_onboarded');
    if (seen) return;
    const overlay = document.getElementById('onboardingOverlay');
    if (!overlay) return;
    overlay.classList.add('visible');
    const dismiss = () => {
      overlay.classList.remove('visible');
      localStorage.setItem('focusdock_onboarded', '1');
      overlay.removeEventListener('click', dismiss);
    };
    const btn = document.getElementById('btnDismissOnboard');
    if (btn) btn.addEventListener('click', (e) => { e.stopPropagation(); dismiss(); });
    setTimeout(dismiss, 10000);
    overlay.addEventListener('click', dismiss);
  }

  // --------------------------------------------------------------------------
  // Multi-Language (i18n)
  // --------------------------------------------------------------------------
  applyLanguage(lang, persist = true) {
    const dict = I18N[lang] || I18N.en;
    if (persist) {
      this.settings.lang = lang;
      this.saveSettings();
    }
    // ITEM 10: Update <html lang> attribute dynamically
    document.documentElement.setAttribute('lang', lang === 'ja' ? 'ja' : lang === 'vi' ? 'vi' : 'en');

    // Badge
    const badge = document.getElementById('langCurrentBadge');
    if (badge) badge.textContent = dict.badge;

    // Header & labels
    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };
    const setHtml = (id, html) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    };

    setText('lblOfflineBadge', dict.offlineBadge);
    setHtml('lblHotkeyBadge', dict.hotkeySpace);

    setText('tabFocus', dict.tabFocus);
    setText('tabShortBreak', dict.tabShortBreak);
    setText('tabLongBreak', dict.tabLongBreak);

    if (this.currentMode === 'focus') {
      setText('timerModeLabel', dict.deepWorkLabel);
      if (!this.isRunning) setText('playBtnText', dict.startFocus);
    } else if (this.currentMode === 'shortBreak') {
      setText('timerModeLabel', dict.shortBreakLabel);
      if (!this.isRunning) setText('playBtnText', dict.startBreak);
    } else {
      setText('timerModeLabel', dict.longBreakLabel);
      if (!this.isRunning) setText('playBtnText', dict.startBreak);
    }

    setText('sessionCounter', dict.sessionCount(((this.sessionCount - 1) % 4) + 1));
    setText('lblStatSessions', dict.statSessions);
    setText('lblStatFocusTime', dict.statFocusTime);
    setText('lblStatStreak', dict.statStreak);

    if (dict.onboardTitle) setText('lblOnboardingTitle', dict.onboardTitle);
    if (dict.onboardDesc) setHtml('lblOnboardingDesc', dict.onboardDesc);
    if (dict.onboardBtn) setText('btnDismissOnboard', dict.onboardBtn);

    setText('lblMixerTitle', dict.mixerTitle);
    setText('lblMixerSubtitle', dict.mixerSubtitle);
    setText('lblAddCustomSound', dict.addCustomSound);
    setText('btnStopAllSounds', dict.stopAll);

    setText('sndNameBrown', dict.sndNameBrown);
    setText('sndDescBrown', dict.sndDescBrown);
    setText('sndNameRain', dict.sndNameRain);
    setText('sndDescRain', dict.sndDescRain);
    setText('sndNameFire', dict.sndNameFire);
    setText('sndDescFire', dict.sndDescFire);
    setText('sndNameAlpha', dict.sndNameAlpha);
    setText('sndDescAlpha', dict.sndDescAlpha);
    setText('sndNamePink', dict.sndNamePink);
    setText('sndDescPink', dict.sndDescPink);
    setText('sndNameWhite', dict.sndNameWhite);
    setText('sndDescWhite', dict.sndDescWhite);

    setText('lblCustomSectionTitle', dict.customSectionTitle);

    // Settings Modal
    setText('lblSettingsTitle', dict.settingsTitle);
    setText('lblSettingLanguage', dict.settingLanguage);
    setText('lblSettingDurations', dict.settingDurations);
    setText('lblFieldFocus', dict.fieldFocus);
    setText('lblFieldShortBreak', dict.fieldShortBreak);
    setText('lblFieldLongBreak', dict.fieldLongBreak);
    setText('lblSettingPreferences', dict.settingPreferences);
    setText('lblToggleAutoBreaks', dict.toggleAutoBreaks);
    setText('lblToggleSoundAlert', dict.toggleSoundAlert);
    setText('lblSettingShortcuts', dict.settingShortcuts);
    setText('lblKeySpace', dict.keySpace);
    setText('lblKeyR', dict.keyR);
    setText('lblKeyS', dict.keyS);
    setText('lblKeyM', dict.keyM);
    setText('btnTestChime', dict.testBell);
    setText('btnCancelSettings', dict.cancel);
    setText('btnSaveSettings', dict.saveChanges);
    // About section
    if (dict.appVersion) setText('lblAppVersion', dict.appVersion);
    if (dict.privacyLink) setText('lblPrivacyLink', dict.privacyLink);
    if (dict.resetDefaults) setText('btnResetDefaults', dict.resetDefaults);

    // Custom Modal
    setText('lblAddCustomModalTitle', dict.addCustomModalTitle);
    setText('lblCustomSoundName', dict.customSoundName);
    const customInput = document.getElementById('inputCustomSoundName');
    if (customInput) customInput.placeholder = dict.customSoundPlaceholder;
    setText('lblChooseAudio', dict.chooseAudio);
    setText('dropzonePrompt', dict.dropzonePrompt);
    setText('btnCancelCustomSound', dict.cancel);
    setText('btnConfirmAddSound', dict.addSoundBtn);

    // Re-render current tip in selected language
    if (this.currentTip) {
      if (this.currentTipType === 'break') {
        if (this.breakTipBadge) this.breakTipBadge.textContent = dict.badgeBreakTip;
      } else {
        if (this.breakTipBadge) this.breakTipBadge.textContent = dict.badgeFocusTip;
      }
      if (this.breakTipTitle) this.breakTipTitle.textContent = this.currentTip.title[lang] || this.currentTip.title.en;
      if (this.breakTipDesc) this.breakTipDesc.textContent = this.currentTip.desc[lang] || this.currentTip.desc.en;
    }

    if (this.inputSessionGoal) {
      this.inputSessionGoal.placeholder = dict.inputGoalPlaceholder;
    }

    if (this.durationPresets) {
      this.updateDurationChips(Math.round(this.totalSeconds / 60));
    }

    // Celebration Modal Strings
    setText('celebrationBadge', dict.celebrationBadge);
    setText('celebrationTitle', dict.celebrationTitle);
    setText('celebrationSubtitle', dict.celebrationSubtitle);
    setText('lblGoalHighlightLabel', dict.goalHighlightLabel);
    setText('lblCSessions', dict.celebrationSessionsLabel);
    setText('lblCTime', dict.celebrationFocusTimeLabel);
    setText('lblCStreak', dict.celebrationStreakLabel);
    setText('lblBtnTakeBreak', dict.btnTakeBreakLabel);
    setText('lblBtnDismiss', dict.btnDismissCelebration);
    setText('lblToggleDesktopNotif', dict.toggleDesktopNotif);
    setText('lblToggleWindowsStartup', dict.lblToggleWindowsStartup);
    setText('subToggleWindowsStartup', dict.subToggleWindowsStartup);
    setText('lblToggleRepeatAlarm', dict.lblToggleRepeatAlarm);
    setText('subToggleRepeatAlarm', dict.subToggleRepeatAlarm);
    setText('lblRingingRepeatText', dict.lblRingingRepeatText);
    setText('lblCelebrationRingingText', dict.lblCelebrationRingingText);

    // Focus Ready Modal Strings (When Break Ends)
    setText('lblFocusReadyBadge', dict.lblFocusReadyBadge);
    setText('lblFocusReadyTitle', dict.lblFocusReadyTitle);
    setText('lblFocusReadySubtitle', dict.lblFocusReadySubtitle);
    setText('lblFocusReadyGoalLabel', dict.lblFocusReadyGoalLabel);
    setText('lblBtnFocusReadyStart', dict.lblBtnFocusReadyStart);
    setText('lblBtnFocusReadySnooze', dict.lblBtnFocusReadySnooze);
    setText('lblFocusReadyRingingText', dict.lblFocusReadyRingingText);

    // Soundscapes Master Controls
    if (this.lblPauseResumeAll) {
      const isPaused = window.audioEngine && !window.audioEngine.hasPlayingSounds() && window.audioEngine.hasActiveOrPausedSounds();
      this.lblPauseResumeAll.textContent = isPaused ? (dict.lblResumeAll || '▶ Resume All') : (dict.lblPauseAll || '⏸ Pause All');
    }

    // Daily Scheduled Reminders Modal & Alarm Translations
    const btnOpenReminders = document.getElementById('btnOpenReminders');
    if (btnOpenReminders && dict.btnOpenRemindersTitle) {
      btnOpenReminders.title = dict.btnOpenRemindersTitle;
    }
    setText('lblRemindersModalTitle', dict.lblRemindersModalTitle);
    setText('lblAddReminderSection', dict.lblAddReminderSection);
    setText('lblReminderTimeField', dict.lblReminderTimeField);
    setText('lblReminderTitleField', dict.lblReminderTitleField);
    setText('lblQuickChipsLabel', dict.lblQuickChipsLabel);
    setText('lblReminderDaysField', dict.lblReminderDaysField);
    setText('optDaysDaily', dict.daysOptionDaily);
    setText('optDaysWeekdays', dict.daysOptionWeekdays);
    setText('optDaysWeekends', dict.daysOptionWeekends);
    setText('lblBtnAddReminder', dict.btnAddReminder);
    setText('lblActiveRemindersTitle', dict.lblActiveRemindersTitle);
    setText('btnDoneReminders', dict.btnDoneReminders);
    setText('lblReminderAlarmBadge', dict.lblReminderAlarmBadge);
    setText('lblBtnReminderDone', dict.btnReminderAlarmDone);
    setText('lblBtnReminderSnooze', dict.btnReminderAlarmSnooze);

    if (this.reminders && this.remindersList) {
      this.renderReminders();
    }

    const sel = document.getElementById('selectLanguage');
    if (sel) sel.value = lang;
  }

  cycleLanguage() {
    const langs = ['en', 'vi', 'ja'];
    const currIdx = langs.indexOf(this.settings.lang);
    const nextLang = langs[(currIdx + 1) % langs.length];
    this.applyLanguage(nextLang);
  }

  // --------------------------------------------------------------------------
  // DOM Elements
  // --------------------------------------------------------------------------
  initElements() {
    this.modeTabs = document.querySelectorAll('.mode-tab');
    this.timerDisplay = document.getElementById('timerDisplay');
    this.timerModeLabel = document.getElementById('timerModeLabel');
    this.sessionCounter = document.getElementById('sessionCounter');
    this.timerProgress = document.getElementById('timerProgress');
    this.timerProgress.style.strokeDasharray = this.CIRCUMFERENCE;

    this.btnPlayPause = document.getElementById('btnPlayPause');
    this.playIcon = document.getElementById('playIcon');
    this.playBtnText = document.getElementById('playBtnText');
    this.btnResetTimer = document.getElementById('btnResetTimer');
    this.btnSkipTimer = document.getElementById('btnSkipTimer');

    this.btnQuickLang = document.getElementById('btnQuickLang');
    this.btnToggleMini = document.getElementById('btnToggleMini');
    this.btnMasterMute = document.getElementById('btnMasterMute');
    this.btnThemeToggle = document.getElementById('btnThemeToggle');
    this.btnOpenSettings = document.getElementById('btnOpenSettings');

    this.statCompleted = document.getElementById('statCompleted');
    this.statFocusTime = document.getElementById('statFocusTime');
    this.statStreak = document.getElementById('statStreak');

    this.miniDockBar = document.getElementById('miniDockBar');
    this.miniDigits = document.getElementById('miniDigits');
    this.miniModeText = document.getElementById('miniModeText');
    this.btnMiniPlay = document.getElementById('btnMiniPlay');
    this.miniPlayIcon = document.getElementById('miniPlayIcon');
    this.btnMiniExpand = document.getElementById('btnMiniExpand');

    // Donate Modal
    this.donateModal = document.getElementById('donateModal');
    this.btnOpenDonate = document.getElementById('btnOpenDonate');
    this.btnCloseDonate = document.getElementById('btnCloseDonate');

    // Settings Modal
    this.settingsModal = document.getElementById('settingsModal');
    this.btnCloseSettings = document.getElementById('btnCloseSettings');
    this.btnCancelSettings = document.getElementById('btnCancelSettings');
    this.btnSaveSettings = document.getElementById('btnSaveSettings');
    this.btnTestChime = document.getElementById('btnTestChime');
    this.selectLanguage = document.getElementById('selectLanguage');
    this.inputFocusTime = document.getElementById('inputFocusTime');
    this.inputShortBreak = document.getElementById('inputShortBreak');
    this.inputLongBreak = document.getElementById('inputLongBreak');
    this.toggleAutoBreaks = document.getElementById('toggleAutoBreaks');
    this.toggleSoundAlert = document.getElementById('toggleSoundAlert');
    this.toggleDesktopNotif = document.getElementById('toggleDesktopNotif');
    this.toggleWindowsStartup = document.getElementById('toggleWindowsStartup');
    this.toggleRepeatAlarm = document.getElementById('toggleRepeatAlarm');

    // Custom Sounds Modal
    this.customSoundModal = document.getElementById('customSoundModal');
    this.btnOpenAddCustomSound = document.getElementById('btnOpenAddCustomSound');
    this.btnCloseCustomModal = document.getElementById('btnCloseCustomModal');
    this.btnCancelCustomSound = document.getElementById('btnCancelCustomSound');
    this.btnConfirmAddSound = document.getElementById('btnConfirmAddSound');
    this.inputCustomSoundName = document.getElementById('inputCustomSoundName');
    this.audioDropzone = document.getElementById('audioDropzone');
    this.inputAudioFile = document.getElementById('inputAudioFile');
    this.selectedFilePreview = document.getElementById('selectedFilePreview');
    this.dropzonePrompt = document.getElementById('dropzonePrompt');
    this.customSoundsSection = document.getElementById('customSoundsSection');
    this.customSoundGrid = document.getElementById('customSoundGrid');

    // Mixer
    this.soundToggles = document.querySelectorAll('.sound-toggle');
    this.soundVolumes = document.querySelectorAll('.sound-volume');
    this.btnPauseResumeAllSounds = document.getElementById('btnPauseResumeAllSounds');
    this.lblPauseResumeAll = document.getElementById('lblPauseResumeAll');
    this.btnStopAllSounds = document.getElementById('btnStopAllSounds');

    // Health Break Tip & Streak Elements
    this.streakToast = document.getElementById('streakToast');
    this.breakTipCard = document.getElementById('breakTipCard');
    this.breakTipBadge = document.getElementById('breakTipBadge');
    this.breakTipIcon = document.getElementById('breakTipIcon');
    this.breakTipTitle = document.getElementById('breakTipTitle');
    this.breakTipDesc = document.getElementById('breakTipDesc');
    this.btnNextTip = document.getElementById('btnNextTip');
    this.dailyStatsCard = document.querySelector('.daily-stats-card');

    // Duration Presets & Goal Elements
    this.durationPresets = document.getElementById('durationPresets');
    this.sessionGoalBox = document.getElementById('sessionGoalBox');
    this.inputSessionGoal = document.getElementById('inputSessionGoal');
    this.btnClearGoal = document.getElementById('btnClearGoal');

    // High-Impact Celebration Modal Elements
    this.celebrationOverlay = document.getElementById('celebrationOverlay');
    this.celebrationCard = document.getElementById('celebrationCard');
    this.btnCloseCelebration = document.getElementById('btnCloseCelebration');
    this.celebrationBigIcon = document.getElementById('celebrationBigIcon');
    this.celebrationTitle = document.getElementById('celebrationTitle');
    this.celebrationSubtitle = document.getElementById('celebrationSubtitle');
    this.celebrationGoalBox = document.getElementById('celebrationGoalBox');
    this.celebrationGoalText = document.getElementById('celebrationGoalText');
    this.cStatSessions = document.getElementById('cStatSessions');
    this.cStatTime = document.getElementById('cStatTime');
    this.cStatStreak = document.getElementById('cStatStreak');
    this.celebrationTipBox = document.getElementById('celebrationTipBox');
    this.cTipIcon = document.getElementById('cTipIcon');
    this.cTipTitle = document.getElementById('cTipTitle');
    this.cTipDesc = document.getElementById('cTipDesc');
    this.btnCelebrationTakeBreak = document.getElementById('btnCelebrationTakeBreak');
    this.btnCelebrationDismiss = document.getElementById('btnCelebrationDismiss');
    this.celebrationTimerFill = document.getElementById('celebrationTimerFill');
    this.celebrationRinging = document.getElementById('celebrationRinging');
    this.lblCelebrationRingingText = document.getElementById('lblCelebrationRingingText');

    // Daily Scheduled Reminders & Alarm Elements
    this.btnOpenReminders = document.getElementById('btnOpenReminders');
    this.reminderBadgeDot = document.getElementById('reminderBadgeDot');
    this.remindersModal = document.getElementById('remindersModal');
    this.btnCloseReminders = document.getElementById('btnCloseReminders');
    this.btnDoneReminders = document.getElementById('btnDoneReminders');
    this.inputReminderTime = document.getElementById('inputReminderTime');
    this.inputReminderTitle = document.getElementById('inputReminderTitle');
    this.selectReminderDays = document.getElementById('selectReminderDays');
    this.btnAddReminder = document.getElementById('btnAddReminder');
    this.remindersList = document.getElementById('remindersList');
    this.reminderChips = document.querySelectorAll('.r-chip');

    // Reminder Alarm Overlay Elements
    this.reminderAlarmOverlay = document.getElementById('reminderAlarmOverlay');
    this.btnCloseReminderAlarm = document.getElementById('btnCloseReminderAlarm');
    this.btnReminderAlarmDone = document.getElementById('btnReminderAlarmDone');
    this.btnReminderAlarmSnooze = document.getElementById('btnReminderAlarmSnooze');
    this.reminderAlarmIcon = document.getElementById('reminderAlarmIcon');
    this.reminderAlarmTime = document.getElementById('reminderAlarmTime');
    this.reminderAlarmTitle = document.getElementById('reminderAlarmTitle');
    this.reminderAlarmSubtitle = document.getElementById('reminderAlarmSubtitle');
    this.reminderAlarmCard = document.getElementById('reminderAlarmCard');
    this.reminderAlarmRinging = document.getElementById('reminderAlarmRinging');
    this.lblRingingRepeatText = document.getElementById('lblRingingRepeatText');

    // Focus Ready Overlay Elements (When Break Ends - Time to Focus)
    this.focusReadyOverlay = document.getElementById('focusReadyOverlay');
    this.focusReadyCard = document.getElementById('focusReadyCard');
    this.btnCloseFocusReady = document.getElementById('btnCloseFocusReady');
    this.focusReadyRinging = document.getElementById('focusReadyRinging');
    this.lblFocusReadyRingingText = document.getElementById('lblFocusReadyRingingText');
    this.focusReadyGoalBox = document.getElementById('focusReadyGoalBox');
    this.focusReadyGoalText = document.getElementById('focusReadyGoalText');
    this.btnFocusReadyStart = document.getElementById('btnFocusReadyStart');
    this.btnFocusReadySnooze = document.getElementById('btnFocusReadySnooze');
  }

  // --------------------------------------------------------------------------
  // Event Bindings
  // --------------------------------------------------------------------------
  bindEvents() {
    this.modeTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const mode = tab.dataset.mode;
        this.setMode(mode);
      });
    });

    // Celebration Modal Events
    if (this.btnCloseCelebration) {
      this.btnCloseCelebration.addEventListener('click', () => this.hideCelebrationModal());
    }
    if (this.btnCelebrationDismiss) {
      this.btnCelebrationDismiss.addEventListener('click', () => this.hideCelebrationModal());
    }
    if (this.btnCelebrationTakeBreak) {
      this.btnCelebrationTakeBreak.addEventListener('click', () => {
        this.hideCelebrationModal();
        if (!this.isRunning) this.startTimer();
      });
    }
    if (this.celebrationOverlay) {
      this.celebrationOverlay.addEventListener('click', (e) => {
        if (e.target === this.celebrationOverlay) this.hideCelebrationModal();
      });
    }

    // Daily Scheduled Reminders Modal Events
    if (this.btnOpenReminders) {
      this.btnOpenReminders.addEventListener('click', () => this.openRemindersModal());
    }
    if (this.btnCloseReminders) {
      this.btnCloseReminders.addEventListener('click', () => this.remindersModal.close());
    }
    if (this.btnDoneReminders) {
      this.btnDoneReminders.addEventListener('click', () => this.remindersModal.close());
    }
    if (this.btnAddReminder) {
      this.btnAddReminder.addEventListener('click', () => this.handleAddReminder());
    }
    if (this.inputReminderTitle) {
      this.inputReminderTitle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleAddReminder();
        }
      });
    }
    if (this.reminderChips) {
      this.reminderChips.forEach(chip => {
        chip.addEventListener('click', () => {
          this.reminderChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          this.selectedReminderIcon = chip.dataset.icon || '⏰';
          if (chip.dataset.title && this.inputReminderTitle) {
            this.inputReminderTitle.value = chip.dataset.title;
          }
        });
      });
    }

    // Reminder Alarm Overlay Events
    if (this.btnCloseReminderAlarm) {
      this.btnCloseReminderAlarm.addEventListener('click', () => this.hideReminderAlarm());
    }
    if (this.btnReminderAlarmDone) {
      this.btnReminderAlarmDone.addEventListener('click', () => {
        const rem = this.activeAlarmReminder;
        this.hideReminderAlarm();
        if (rem) this.showReminderEncouragementToast(rem);
      });
    }
    if (this.btnReminderAlarmSnooze) {
      this.btnReminderAlarmSnooze.addEventListener('click', () => {
        if (this.activeAlarmReminder) {
          this.snoozeReminder(this.activeAlarmReminder, 5);
        }
        this.hideReminderAlarm();
      });
    }
    if (this.reminderAlarmOverlay) {
      this.reminderAlarmOverlay.addEventListener('click', (e) => {
        if (e.target === this.reminderAlarmOverlay) this.hideReminderAlarm();
      });
    }

    // Focus Ready Overlay Events (Break Ended - Time to Focus)
    if (this.btnCloseFocusReady) {
      this.btnCloseFocusReady.addEventListener('click', () => this.hideFocusReadyModal());
    }
    if (this.btnFocusReadyStart) {
      this.btnFocusReadyStart.addEventListener('click', () => {
        this.hideFocusReadyModal();
        this.setMode('focus');
        this.startTimer();
        const dict = I18N[this.settings.lang] || I18N.en;
        this.showStreakToast(dict.toastFocusStarted);
      });
    }
    if (this.btnFocusReadySnooze) {
      this.btnFocusReadySnooze.addEventListener('click', () => {
        this.hideFocusReadyModal();
        this.snoozeBreak(2);
      });
    }
    if (this.focusReadyOverlay) {
      this.focusReadyOverlay.addEventListener('click', (e) => {
        if (e.target === this.focusReadyOverlay) this.hideFocusReadyModal();
      });
    }

    if (this.timerDisplay) {
      this.timerDisplay.addEventListener('click', () => {
        this.promptCustomDuration();
      });
    }

    if (this.inputSessionGoal) {
      this.inputSessionGoal.addEventListener('input', (e) => {
        this.sessionGoal = e.target.value.trim();
        if (this.btnClearGoal) {
          this.btnClearGoal.style.display = this.sessionGoal ? 'inline-flex' : 'none';
        }
      });
      this.inputSessionGoal.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.inputSessionGoal.blur();
          if (!this.isRunning) {
            this.startTimer();
          }
        }
      });
    }

    if (this.btnClearGoal) {
      this.btnClearGoal.addEventListener('click', () => {
        if (this.inputSessionGoal) {
          this.inputSessionGoal.value = '';
          this.inputSessionGoal.focus();
        }
        this.sessionGoal = '';
        this.btnClearGoal.style.display = 'none';
      });
    }

    if (this.btnNextTip) {
      this.btnNextTip.addEventListener('click', () => {
        if (this.currentMode === 'focus') {
          this.pickRandomFocusTip();
        } else {
          this.pickRandomBreakTip(true);
        }
      });
    }

    if (this.btnTestChime) {
      this.btnTestChime.addEventListener('click', () => {
        if (window.audioEngine) window.audioEngine.playChime('bowl');
      });
    }

    this.btnPlayPause.addEventListener('click', () => this.toggleTimer());
    this.btnResetTimer.addEventListener('click', () => this.resetTimer());
    this.btnSkipTimer.addEventListener('click', () => this.skipSession());

    this.btnToggleMini.addEventListener('click', () => this.toggleMiniMode());
    this.btnMiniExpand.addEventListener('click', () => this.toggleMiniMode());
    this.btnMiniPlay.addEventListener('click', () => this.toggleTimer());

    this.btnQuickLang.addEventListener('click', () => this.cycleLanguage());
    this.btnThemeToggle.addEventListener('click', () => this.toggleTheme());
    this.btnMasterMute.addEventListener('click', () => this.toggleMute());
    this.btnOpenSettings.addEventListener('click', () => this.openSettings());
    this.btnCloseSettings.addEventListener('click', () => this.cancelSettings());

    // Donate modal
    if (this.btnOpenDonate) {
      this.btnOpenDonate.addEventListener('click', () => {
        if (this.donateModal) this.donateModal.showModal();
      });
    }
    if (this.btnCloseDonate) {
      this.btnCloseDonate.addEventListener('click', () => {
        if (this.donateModal) this.donateModal.close();
      });
    }
    if (this.donateModal) {
      this.donateModal.addEventListener('click', (e) => {
        if (e.target === this.donateModal) this.donateModal.close();
      });
    }

    // About section → open donate modal
    const btnAboutDonate = document.getElementById('btnAboutDonate');
    if (btnAboutDonate) {
      btnAboutDonate.addEventListener('click', () => {
        // Close settings first, then open donate
        if (this.settingsModal) this.settingsModal.close();
        if (this.donateModal) this.donateModal.showModal();
      });
    }

    // Reset to Defaults
    const btnResetDefaults = document.getElementById('btnResetDefaults');
    if (btnResetDefaults) {
      btnResetDefaults.addEventListener('click', () => {
        const dict = I18N[this.settings.lang] || I18N.en;
        const confirmMsg = dict.resetDefaults || 'Reset to Defaults';
        if (!confirm(`${confirmMsg}?\n\nThis will reset Focus (25m), Short Break (5m), Long Break (15m) and all preferences to factory defaults.`)) return;
        const currentLang = this.settings.lang;
        const currentTheme = this.settings.theme;
        this.settings = {
          lang: currentLang,
          focusTime: 25,
          shortBreak: 5,
          longBreak: 15,
          autoStartBreaks: false,
          soundAlert: true,
          desktopNotif: true,
          windowsStartup: false,
          repeatAlarm: true,
          theme: currentTheme,
          soundVolumes: {}
        };
        this.saveSettings();
        this.inputFocusTime.value = 25;
        this.inputShortBreak.value = 5;
        this.inputLongBreak.value = 15;
        if (this.toggleAutoBreaks) this.toggleAutoBreaks.checked = false;
        if (this.toggleSoundAlert) this.toggleSoundAlert.checked = true;
        if (this.toggleDesktopNotif) this.toggleDesktopNotif.checked = true;
        if (this.toggleRepeatAlarm) this.toggleRepeatAlarm.checked = true;
      });
    }
    if (this.btnCancelSettings) {
      this.btnCancelSettings.addEventListener('click', () => this.cancelSettings());
    }
    this.settingsModal.addEventListener('cancel', (e) => {
      e.preventDefault();
      this.cancelSettings();
    });
    this.selectLanguage.addEventListener('change', (e) => {
      this.applyLanguage(e.target.value, false);
    });
    this.btnSaveSettings.addEventListener('click', () => this.handleSaveSettings());
    if (this.toggleWindowsStartup) {
      this.toggleWindowsStartup.addEventListener('change', (e) => {
        this.setWindowsStartup(e.target.checked);
      });
    }
    if (this.toggleRepeatAlarm) {
      this.toggleRepeatAlarm.addEventListener('change', (e) => {
        this.settings.repeatAlarm = e.target.checked;
        this.saveSettings();
      });
    }
    this.btnTestChime.addEventListener('click', () => {
      if (window.audioEngine) window.audioEngine.playChime('bowl');
    });

    // Custom Sounds Modal Events
    this.btnOpenAddCustomSound.addEventListener('click', () => this.openCustomSoundModal());
    this.btnCloseCustomModal.addEventListener('click', () => this.customSoundModal.close());
    this.btnCancelCustomSound.addEventListener('click', () => this.customSoundModal.close());
    this.btnConfirmAddSound.addEventListener('click', () => this.handleConfirmAddCustomSound());

    this.audioDropzone.addEventListener('click', () => this.inputAudioFile.click());
    this.inputAudioFile.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        this.handleFileSelected(e.target.files[0]);
      }
    });

    this.audioDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      this.audioDropzone.classList.add('drag-over');
    });
    this.audioDropzone.addEventListener('dragleave', () => {
      this.audioDropzone.classList.remove('drag-over');
    });
    this.audioDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      this.audioDropzone.classList.remove('drag-over');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        this.handleFileSelected(e.dataTransfer.files[0]);
      }
    });

    this.inputCustomSoundName.addEventListener('input', () => this.validateCustomSoundForm());

    // Sound Mixer Controls: Play/Pause Buttons & Toggles
    const updateMasterPauseButton = () => {
      if (!this.lblPauseResumeAll || !window.audioEngine) return;
      const dict = I18N[this.settings.lang] || I18N.en;
      const hasPlaying = window.audioEngine.hasPlayingSounds();
      const hasAny = window.audioEngine.hasActiveOrPausedSounds();

      if (hasPlaying) {
        this.lblPauseResumeAll.textContent = dict.lblPauseAll || '⏸ Pause All';
        if (this.btnPauseResumeAllSounds) this.btnPauseResumeAllSounds.classList.remove('resumed');
      } else if (hasAny) {
        this.lblPauseResumeAll.textContent = dict.lblResumeAll || '▶ Resume All';
        if (this.btnPauseResumeAllSounds) this.btnPauseResumeAllSounds.classList.add('resumed');
      } else {
        this.lblPauseResumeAll.textContent = dict.lblPauseAll || '⏸ Pause All';
        if (this.btnPauseResumeAllSounds) this.btnPauseResumeAllSounds.classList.remove('resumed');
      }
    };

    // Procedural sound cards: Play/Pause buttons & switches
    document.querySelectorAll('#proceduralSoundGrid .sound-card').forEach(card => {
      const soundType = card.dataset.sound;
      const playBtn = card.querySelector('.btn-sound-play');
      const toggle = card.querySelector('.sound-toggle');
      const slider = card.querySelector('.sound-volume');

      const togglePlayPause = () => {
        const vol = parseFloat(slider.value) / 100;
        const isPlaying = card.classList.contains('active');
        const isPaused = card.classList.contains('paused');

        if (isPlaying) {
          // Pause and preserve position
          if (window.audioEngine) window.audioEngine.pauseSound(soundType);
          card.classList.remove('active');
          card.classList.add('paused');
          if (toggle) toggle.checked = false;
        } else {
          // Play or resume from preserved position
          if (isPaused) {
            if (window.audioEngine) window.audioEngine.resumeSound(soundType);
          } else {
            if (window.audioEngine) window.audioEngine.startSound(soundType, vol);
          }
          card.classList.remove('paused');
          card.classList.add('active');
          if (toggle) toggle.checked = true;
        }
        updateMasterPauseButton();
        this.ensureSoundTracker();
      };

      if (playBtn) {
        playBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          togglePlayPause();
        });
      }

      if (toggle) {
        toggle.addEventListener('change', (e) => {
          if (e.target.checked) {
            const vol = parseFloat(slider.value) / 100;
            if (card.classList.contains('paused')) {
              if (window.audioEngine) window.audioEngine.resumeSound(soundType);
            } else {
              if (window.audioEngine) window.audioEngine.startSound(soundType, vol);
            }
            card.classList.remove('paused');
            card.classList.add('active');
          } else {
            // When turning toggle off, pause so turning it on resumes from here!
            if (window.audioEngine) window.audioEngine.pauseSound(soundType);
            card.classList.remove('active');
            card.classList.add('paused');
          }
          updateMasterPauseButton();
          this.ensureSoundTracker();
        });
      }
    });

    this.soundVolumes.forEach(slider => {
      slider.addEventListener('input', (e) => {
        const soundType = e.target.dataset.sound;
        const card = e.target.closest('.sound-card');
        const vol = parseFloat(e.target.value) / 100;

        if (card.classList.contains('active') && window.audioEngine) {
          window.audioEngine.setSoundVolume(soundType, vol);
        }
        // Persist volume per sound
        if (soundType) {
          if (!this.settings.soundVolumes) this.settings.soundVolumes = {};
          this.settings.soundVolumes[soundType] = parseFloat(e.target.value);
          this.saveSettings();
        }
      });
    });

    // Master Pause / Resume All Sounds Button
    if (this.btnPauseResumeAllSounds) {
      this.btnPauseResumeAllSounds.addEventListener('click', () => {
        if (!window.audioEngine) return;
        if (window.audioEngine.hasPlayingSounds()) {
          window.audioEngine.pauseAllSounds();
          document.querySelectorAll('#proceduralSoundGrid .sound-card.active, #customSoundGrid .sound-card.active').forEach(c => {
            c.classList.remove('active');
            c.classList.add('paused');
            const chk = c.querySelector('.sound-toggle');
            if (chk) chk.checked = false;
          });
        } else if (window.audioEngine.hasActiveOrPausedSounds()) {
          window.audioEngine.resumeAllSounds();
          document.querySelectorAll('#proceduralSoundGrid .sound-card.paused, #customSoundGrid .sound-card.paused').forEach(c => {
            c.classList.remove('paused');
            c.classList.add('active');
            const chk = c.querySelector('.sound-toggle');
            if (chk) chk.checked = true;
          });
        }
        updateMasterPauseButton();
        this.ensureSoundTracker();
      });
    }

    // Stop All Sounds Button (resets playing & paused states and audio tracks)
    this.btnStopAllSounds.addEventListener('click', () => {
      document.querySelectorAll('#proceduralSoundGrid .sound-card, #customSoundGrid .sound-card').forEach(card => {
        card.classList.remove('active', 'paused');
        const chk = card.querySelector('.sound-toggle');
        if (chk) chk.checked = false;
        const badge = card.querySelector('.sound-time-badge');
        if (badge) badge.style.display = 'none';
      });
      if (window.audioEngine) window.audioEngine.stopAllSounds();
      updateMasterPauseButton();
      this.ensureSoundTracker();
    });

    // Global Keydown (with IME support via e.code)
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;

      // When celebration modal is active, allow Esc to dismiss or Space/Enter to start break
      if (this.celebrationOverlay && this.celebrationOverlay.classList.contains('show')) {
        if (e.key === 'Escape') {
          e.preventDefault();
          this.hideCelebrationModal();
          return;
        }
        if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault();
          this.hideCelebrationModal();
          if (!this.isRunning) this.startTimer();
          return;
        }
      }

      // When reminder alarm overlay is active, Esc dismisses and Space/Enter marks done
      if (this.reminderAlarmOverlay && this.reminderAlarmOverlay.classList.contains('show')) {
        if (e.key === 'Escape') {
          e.preventDefault();
          this.hideReminderAlarm();
          return;
        }
        if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault();
          const rem = this.activeAlarmReminder;
          this.hideReminderAlarm();
          if (rem) this.showReminderEncouragementToast(rem);
          return;
        }
      }

      // When focus ready overlay is active, allow Esc to dismiss or Space/Enter to start focus
      if (this.focusReadyOverlay && this.focusReadyOverlay.classList.contains('show')) {
        if (e.key === 'Escape') {
          e.preventDefault();
          this.hideFocusReadyModal();
          return;
        }
        if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault();
          this.hideFocusReadyModal();
          this.setMode('focus');
          this.startTimer();
          const dict = I18N[this.settings.lang] || I18N.en;
          this.showStreakToast(dict.toastFocusStarted);
          return;
        }
      }

      if (e.code === 'Space') {
        e.preventDefault();
        this.toggleTimer();
      } else if (e.key.toLowerCase() === 'r' || e.code === 'KeyR') {
        e.preventDefault();
        this.resetTimer();
      } else if (e.key.toLowerCase() === 's' || e.code === 'KeyS') {
        e.preventDefault();
        this.skipSession();
      } else if (e.key.toLowerCase() === 'm' || e.code === 'KeyM') {
        e.preventDefault();
        this.toggleMiniMode();
      }
    });
  }

  // --------------------------------------------------------------------------
  // Custom Sound Handling & IndexedDB
  // --------------------------------------------------------------------------
  openCustomSoundModal() {
    this.inputCustomSoundName.value = '';
    this.inputAudioFile.value = '';
    this.pendingAudioBlob = null;
    this.selectedFilePreview.textContent = '';
    this.dropzonePrompt.style.display = 'block';
    this.btnConfirmAddSound.disabled = true;
    this.customSoundModal.showModal();
  }

  handleFileSelected(file) {
    if (!file.type.startsWith('audio/') && !file.name.match(/\.(mp3|wav|ogg|m4a|flac|aac)$/i)) {
      alert('Please select an audio file (MP3, WAV, OGG, M4A, FLAC)');
      return;
    }

    this.pendingAudioBlob = file;
    this.selectedFilePreview.textContent = `✓ ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
    this.dropzonePrompt.style.display = 'none';

    if (!this.inputCustomSoundName.value.trim()) {
      const defaultName = file.name.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ');
      this.inputCustomSoundName.value = defaultName.charAt(0).toUpperCase() + defaultName.slice(1);
    }
    this.validateCustomSoundForm();
  }

  validateCustomSoundForm() {
    const hasName = this.inputCustomSoundName.value.trim().length > 0;
    const hasFile = this.pendingAudioBlob !== null;
    this.btnConfirmAddSound.disabled = !(hasName && hasFile);
  }

  async handleConfirmAddCustomSound() {
    if (!this.pendingAudioBlob) return;
    const name = this.inputCustomSoundName.value.trim() || 'Custom Sound';
    const id = 'custom_' + Date.now();

    try {
      if (window.audioEngine) {
        await window.audioEngine.saveCustomSoundToDb(id, name, this.pendingAudioBlob);
        await this.loadCustomSounds();
      }
      this.customSoundModal.close();
    } catch (err) {
      console.error('Failed to save sound:', err);
      alert('Could not save custom sound: ' + err.message);
    }
  }

  async loadCustomSounds() {
    if (!window.audioEngine) return;
    try {
      this.customSoundsList = await window.audioEngine.getAllCustomSoundsFromDb();
      this.renderCustomSounds();
    } catch (err) {
      console.warn('Could not load custom sounds:', err);
    }
  }

  renderCustomSounds() {
    if (this.customSoundsList.length === 0) {
      this.customSoundsSection.style.display = 'none';
      this.customSoundGrid.innerHTML = '';
      return;
    }

    this.customSoundsSection.style.display = 'block';
    this.customSoundGrid.innerHTML = '';

    this.customSoundsList.forEach(item => {
      const card = document.createElement('div');
      card.className = 'sound-card';
      card.dataset.id = item.id;
      card.dataset.customId = item.id;

      card.innerHTML = `
        <div class="sound-card-top">
          <div class="sound-icon-box custom">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          </div>
          <div class="sound-info">
            <div class="sound-name-row">
              <span class="sound-name">${this.escapeHtml(item.name)}</span>
              <span class="sound-time-badge" style="display: none;">00:00</span>
            </div>
            <span class="sound-desc">Custom Audio • 100% Local</span>
          </div>
          <button type="button" class="sound-delete-btn" title="Delete Sound" aria-label="Delete">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
          <button type="button" class="btn-sound-play" title="Play / Pause" aria-label="Play or pause custom sound">
            <svg class="icon-play" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <svg class="icon-pause" viewBox="0 0 24 24" fill="currentColor" style="display: none;">
              <rect x="6" y="4" width="4" height="16" rx="1"></rect>
              <rect x="14" y="4" width="4" height="16" rx="1"></rect>
            </svg>
          </button>
          <label class="switch">
            <input type="checkbox" class="sound-toggle">
            <span class="slider"></span>
          </label>
        </div>
        <div class="sound-slider-box">
          <input type="range" class="sound-volume" min="0" max="100" value="60">
        </div>
      `;

      const playBtn = card.querySelector('.btn-sound-play');
      const toggle = card.querySelector('.sound-toggle');
      const slider = card.querySelector('.sound-volume');
      const deleteBtn = card.querySelector('.sound-delete-btn');

      const updateMasterBtn = () => {
        if (!this.lblPauseResumeAll || !window.audioEngine) return;
        const dict = I18N[this.settings.lang] || I18N.en;
        const hasPlaying = window.audioEngine.hasPlayingSounds();
        const hasAny = window.audioEngine.hasActiveOrPausedSounds();

        if (hasPlaying) {
          this.lblPauseResumeAll.textContent = dict.lblPauseAll || '⏸ Pause All';
          if (this.btnPauseResumeAllSounds) this.btnPauseResumeAllSounds.classList.remove('resumed');
        } else if (hasAny) {
          this.lblPauseResumeAll.textContent = dict.lblResumeAll || '▶ Resume All';
          if (this.btnPauseResumeAllSounds) this.btnPauseResumeAllSounds.classList.add('resumed');
        } else {
          this.lblPauseResumeAll.textContent = dict.lblPauseAll || '⏸ Pause All';
          if (this.btnPauseResumeAllSounds) this.btnPauseResumeAllSounds.classList.remove('resumed');
        }
      };

      const toggleCustomPlayPause = () => {
        const vol = parseFloat(slider.value) / 100;
        const isPlaying = card.classList.contains('active');
        const isPaused = card.classList.contains('paused');

        if (isPlaying) {
          // Pause at exact position
          if (window.audioEngine) window.audioEngine.pauseCustomSound(item.id);
          card.classList.remove('active');
          card.classList.add('paused');
          if (toggle) toggle.checked = false;
        } else {
          // Resume from exact position
          if (isPaused) {
            if (window.audioEngine) window.audioEngine.resumeCustomSound(item.id);
          } else {
            if (window.audioEngine) window.audioEngine.playCustomSound(item.id, item.blob, vol);
          }
          card.classList.remove('paused');
          card.classList.add('active');
          if (toggle) toggle.checked = true;
        }
        updateMasterBtn();
        this.ensureSoundTracker();
      };

      if (playBtn) {
        playBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleCustomPlayPause();
        });
      }

      toggle.addEventListener('change', (e) => {
        const vol = parseFloat(slider.value) / 100;
        if (e.target.checked) {
          if (card.classList.contains('paused')) {
            if (window.audioEngine) window.audioEngine.resumeCustomSound(item.id);
          } else {
            if (window.audioEngine) window.audioEngine.playCustomSound(item.id, item.blob, vol);
          }
          card.classList.remove('paused');
          card.classList.add('active');
        } else {
          // Pause when toggle is unchecked so turning it on continues from that exact spot
          if (window.audioEngine) window.audioEngine.pauseCustomSound(item.id);
          card.classList.remove('active');
          card.classList.add('paused');
        }
        updateMasterBtn();
        this.ensureSoundTracker();
      });

      slider.addEventListener('input', (e) => {
        const vol = parseFloat(e.target.value) / 100;
        if (card.classList.contains('active')) {
          window.audioEngine.setCustomSoundVolume(item.id, vol);
        }
      });

      deleteBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        if (confirm(`Remove "${item.name}" from FocusDock?`)) {
          await window.audioEngine.deleteCustomSoundFromDb(item.id);
          await this.loadCustomSounds();
          updateMasterBtn();
        }
      });

      this.customSoundGrid.appendChild(card);
    });
  }

  ensureSoundTracker() {
    if (this.soundTrackerInterval) return;

    const formatTime = (secs) => {
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    const updateMiniSoundIndicator = () => {
      const miniSoundIndicator = document.getElementById('miniSoundIndicator');
      if (miniSoundIndicator && window.audioEngine) {
        const hasPlaying = window.audioEngine.hasPlayingSounds();
        miniSoundIndicator.style.display = hasPlaying ? 'inline-flex' : 'none';
      }
    };

    this.soundTrackerInterval = setInterval(() => {
      if (!window.audioEngine) return;

      let anyActiveOrPaused = false;

      // Update procedural sound cards
      document.querySelectorAll('#proceduralSoundGrid .sound-card').forEach(card => {
        const soundType = card.dataset.sound;
        const state = window.audioEngine.getSoundState(soundType);
        const badge = card.querySelector('.sound-time-badge');

        if (state.active) {
          anyActiveOrPaused = true;
          if (badge) {
            badge.style.display = 'inline-block';
            badge.textContent = (state.isPaused ? '⏸ ' : '▶ ') + formatTime(state.elapsed);
          }
        } else {
          if (badge) badge.style.display = 'none';
        }
      });

      // Update custom sound cards
      document.querySelectorAll('#customSoundGrid .sound-card').forEach(card => {
        const soundId = card.dataset.id;
        const state = window.audioEngine.getCustomSoundState(soundId);
        const badge = card.querySelector('.sound-time-badge');

        if (state.active) {
          anyActiveOrPaused = true;
          if (badge) {
            badge.style.display = 'inline-block';
            const curStr = formatTime(state.current);
            const durStr = state.duration > 0 ? ` / ${formatTime(state.duration)}` : '';
            badge.textContent = (state.isPaused ? '⏸ ' : '▶ ') + curStr + durStr;
          }
        } else {
          if (badge) badge.style.display = 'none';
        }
      });

      updateMiniSoundIndicator();

      if (!anyActiveOrPaused) {
        clearInterval(this.soundTrackerInterval);
        this.soundTrackerInterval = null;
        const miniSoundIndicator = document.getElementById('miniSoundIndicator');
        if (miniSoundIndicator) miniSoundIndicator.style.display = 'none';
      }
    }, 500);
  }

  escapeHtml(str) {
    const p = document.createElement('p');
    p.textContent = str;
    return p.innerHTML;
  }

  // --------------------------------------------------------------------------
  // Timer State Machine
  // --------------------------------------------------------------------------
  setMode(mode) {
    this.pauseTimer();
    this.currentMode = mode;

    const dict = I18N[this.settings.lang] || I18N.en;
    let minutes = this.settings.focusTime;
    let label = dict.deepWorkLabel;
    let progressColor = 'var(--focus-color)';

    if (mode === 'shortBreak') {
      minutes = this.settings.shortBreak;
      label = dict.shortBreakLabel;
      progressColor = 'var(--break-color)';
    } else if (mode === 'longBreak') {
      minutes = this.settings.longBreak;
      label = dict.longBreakLabel;
      progressColor = 'var(--longbreak-color)';
    }

    this.totalSeconds = minutes * 60;
    this.remainingSeconds = this.totalSeconds;

    this.modeTabs.forEach(t => t.classList.toggle('active', t.dataset.mode === mode));
    this.timerModeLabel.textContent = label;
    this.timerProgress.style.stroke = progressColor;
    this.miniModeText.textContent = mode === 'focus' ? dict.tabFocus : dict.tabShortBreak;

    const dot = document.querySelector('.mini-status-dot');
    if (dot) dot.style.background = progressColor;

    if (this.sessionGoalBox) {
      this.sessionGoalBox.style.display = mode === 'focus' ? 'flex' : 'none';
    }

    this.updateDurationChips(minutes);
    this.updateTipCard(mode);
    this.updateDisplay();
  }

  // --------------------------------------------------------------------------
  // Duration Presets & Custom Duration
  // --------------------------------------------------------------------------
  updateDurationChips(currentMins, isCustom = false) {
    if (!this.durationPresets) return;
    const presetsByMode = {
      focus: [15, 25, 45, 60],
      shortBreak: [3, 5, 10],
      longBreak: [10, 15, 20, 30]
    };
    const list = presetsByMode[this.currentMode] || presetsByMode.focus;
    const dict = I18N[this.settings.lang] || I18N.en;

    let html = '';
    let matchFound = false;
    list.forEach(m => {
      const active = (!isCustom && m === currentMins) ? 'active' : '';
      if (active) matchFound = true;
      html += `<button type="button" class="duration-chip ${active}" data-mins="${m}">${m}m</button>`;
    });

    const customActive = (isCustom || (!matchFound && currentMins)) ? 'active' : '';
    const customText = (customActive && currentMins && !list.includes(currentMins))
      ? `⏱️ ${currentMins}m`
      : (dict.customChipLabel || '⏱️ Custom');

    html += `<button type="button" class="duration-chip custom-chip ${customActive}" id="btnCustomDuration" title="${dict.customChipLabel || 'Custom duration'}">${customText}</button>`;

    this.durationPresets.innerHTML = html;

    this.durationPresets.querySelectorAll('.duration-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        if (chip.id === 'btnCustomDuration') {
          this.promptCustomDuration();
        } else {
          const mins = parseInt(chip.dataset.mins, 10);
          if (mins) this.setSessionDuration(mins, false);
        }
      });
    });
  }

  setSessionDuration(mins, isCustom = false) {
    const clamped = Math.max(1, Math.min(180, mins));
    if (this.currentMode === 'focus') {
      this.settings.focusTime = clamped;
    } else if (this.currentMode === 'shortBreak') {
      this.settings.shortBreak = clamped;
    } else if (this.currentMode === 'longBreak') {
      this.settings.longBreak = clamped;
    }
    this.saveSettings();

    this.pauseTimer();
    this.totalSeconds = clamped * 60;
    this.remainingSeconds = this.totalSeconds;
    this.updateDurationChips(clamped, isCustom);
    this.updateDisplay();
  }

  promptCustomDuration() {
    const dict = I18N[this.settings.lang] || I18N.en;
    const currentMins = Math.round(this.totalSeconds / 60) || 25;
    const input = window.prompt(dict.customDurationPrompt, currentMins);
    if (input !== null) {
      const parsed = parseInt(input.trim(), 10);
      if (!isNaN(parsed) && parsed >= 1 && parsed <= 180) {
        this.setSessionDuration(parsed, true);
      }
    }
  }

  // --------------------------------------------------------------------------
  // Health Break Activities & Streak Celebration
  // --------------------------------------------------------------------------
  pickRandomBreakTip(isUserClick = false) {
    this.currentTipType = 'break';
    const pool = BREAK_ACTIVITIES.filter(t => !this.currentTip || t.id !== this.currentTip.id);
    const chosen = pool[Math.floor(Math.random() * pool.length)] || BREAK_ACTIVITIES[0];
    this.currentTip = chosen;

    const lang = this.settings.lang || 'en';
    const dict = I18N[lang] || I18N.en;

    if (this.breakTipBadge) this.breakTipBadge.textContent = dict.badgeBreakTip;
    if (this.breakTipIcon) this.breakTipIcon.textContent = chosen.icon;
    if (this.breakTipTitle) this.breakTipTitle.textContent = chosen.title[lang] || chosen.title.en;
    if (this.breakTipDesc) this.breakTipDesc.textContent = chosen.desc[lang] || chosen.desc.en;

    if (isUserClick && this.btnNextTip) {
      this.btnNextTip.style.transform = 'rotate(180deg)';
      setTimeout(() => {
        if (this.btnNextTip) this.btnNextTip.style.transform = '';
      }, 300);
    }
  }

  pickRandomFocusTip() {
    this.currentTipType = 'focus';
    const chosen = FOCUS_TIPS[Math.floor(Math.random() * FOCUS_TIPS.length)] || FOCUS_TIPS[0];
    this.currentTip = chosen;

    const lang = this.settings.lang || 'en';
    const dict = I18N[lang] || I18N.en;

    if (this.breakTipBadge) this.breakTipBadge.textContent = dict.badgeFocusTip;
    if (this.breakTipIcon) this.breakTipIcon.textContent = chosen.icon;
    if (this.breakTipTitle) this.breakTipTitle.textContent = chosen.title[lang] || chosen.title.en;
    if (this.breakTipDesc) this.breakTipDesc.textContent = chosen.desc[lang] || chosen.desc.en;
  }

  updateTipCard(mode) {
    if (!this.breakTipCard) return;

    if (mode === 'shortBreak' || mode === 'longBreak') {
      this.breakTipCard.classList.add('is-break');
      this.breakTipCard.classList.toggle('is-long-break', mode === 'longBreak');
      this.pickRandomBreakTip();
    } else {
      this.breakTipCard.classList.remove('is-break', 'is-long-break');
      this.pickRandomFocusTip();
    }
  }

  celebrateStreak() {

    // 1. Confetti Burst Animation (Unmissable visual celebration)
    if (this.confetti) {
      this.confetti.burst(95);
    }

    // 2. High-Impact Fluent Celebration Modal
    this.showCelebrationModal();

    // 3. Windows Native Desktop Push Notification
    this.sendDesktopNotification();

    // 4. Inactive Tab Title Flashing Alert
    const dict = I18N[this.settings.lang] || I18N.en;
    this.flashTabTitle(dict.tabFlashComplete);

    // 5. Secondary Quick Toast
    if (this.streakToast) {
      const count = this.stats.completedSessions;
      if (this.sessionGoal) {
        this.streakToast.textContent = dict.goalAchievedToast(this.sessionGoal, count);
      } else {
        this.streakToast.textContent = dict.toastCelebration(count);
      }
      this.streakToast.classList.add('show');

      if (this.toastTimeout) clearTimeout(this.toastTimeout);
      this.toastTimeout = setTimeout(() => {
        if (this.streakToast) this.streakToast.classList.remove('show');
      }, 8000);
    }

    // 6. Update Break Tip Badge
    if (this.breakTipBadge) {
      const lang = this.settings.lang || 'en';
      if (this.sessionGoal) {
        if (lang === 'vi') {
          this.breakTipBadge.textContent = `🎯 Hoàn thành: "${this.sessionGoal}" • ${this.stats.completedSessions} phiên`;
        } else if (lang === 'ja') {
          this.breakTipBadge.textContent = `🎯 達成: 「${this.sessionGoal}」 • ${this.stats.completedSessions} 回`;
        } else {
          this.breakTipBadge.textContent = `🎯 Achieved: "${this.sessionGoal}" • ${this.stats.completedSessions} session${this.stats.completedSessions > 1 ? 's' : ''}`;
        }
      } else {
        if (lang === 'vi') {
          this.breakTipBadge.textContent = `🔥 Chuỗi hôm nay: ${this.stats.completedSessions} phiên`;
        } else if (lang === 'ja') {
          this.breakTipBadge.textContent = `🔥 連続記録: ${this.stats.completedSessions} 回達成`;
        } else {
          this.breakTipBadge.textContent = `🔥 Streak: ${this.stats.completedSessions} session${this.stats.completedSessions > 1 ? 's' : ''}`;
        }
      }
    }

    if (this.breakTipCard) {
      this.breakTipCard.classList.add('celebrate-pulse');
      setTimeout(() => {
        if (this.breakTipCard) this.breakTipCard.classList.remove('celebrate-pulse');
      }, 2000);
    }

    if (this.dailyStatsCard) {
      this.dailyStatsCard.classList.add('celebrate');
      setTimeout(() => {
        if (this.dailyStatsCard) this.dailyStatsCard.classList.remove('celebrate');
      }, 1800);
    }
  }

  showCelebrationModal() {
    if (!this.celebrationOverlay) return;

    const lang = this.settings.lang || 'en';
    const dict = I18N[lang] || I18N.en;

    // Display session goal if present
    if (this.sessionGoal) {
      if (this.celebrationGoalBox) this.celebrationGoalBox.style.display = 'flex';
      if (this.celebrationGoalText) this.celebrationGoalText.textContent = this.sessionGoal;
    } else {
      if (this.celebrationGoalBox) this.celebrationGoalBox.style.display = 'none';
    }

    // Display statistics
    if (this.cStatSessions) this.cStatSessions.textContent = this.stats.completedSessions;
    if (this.cStatTime) {
      const mins = Math.floor(this.stats.totalFocusSeconds / 60);
      this.cStatTime.textContent = mins < 60 ? `${mins}m` : `${(mins / 60).toFixed(1)}h`;
    }
    if (this.cStatStreak) this.cStatStreak.textContent = `${this.stats.streak} 🔥`;

    // Display suggested mindful break activity
    if (this.currentTip) {
      if (this.cTipIcon) this.cTipIcon.textContent = this.currentTip.icon || '💧';
      if (this.cTipTitle) this.cTipTitle.textContent = this.currentTip.title[lang] || this.currentTip.title.en;
      if (this.cTipDesc) this.cTipDesc.textContent = this.currentTip.desc[lang] || this.currentTip.desc.en;
    }

    // Start celebration chime loop if repeat is enabled
    this.startCelebrationChimeLoop();

    // If repeat is active, stay open and ringing up to 30 strikes (~3.5 mins) until user passes
    // If repeat is disabled, auto-dismiss in 20s
    const isRepeating = this.settings.repeatAlarm !== false && !this.settings.autoStartBreaks;
    const dismissMs = isRepeating ? 210000 : 20000;
    if (this.celebrationTimerFill && this.celebrationTimerFill.parentElement) {
      if (isRepeating) {
        this.celebrationTimerFill.parentElement.style.display = 'none';
      } else {
        this.celebrationTimerFill.parentElement.style.display = 'block';
        this.celebrationTimerFill.style.transition = 'none';
        this.celebrationTimerFill.style.transform = 'scaleX(1)';
        void this.celebrationTimerFill.offsetWidth;
        this.celebrationTimerFill.style.transition = `transform ${dismissMs / 1000}s linear`;
        this.celebrationTimerFill.style.transform = 'scaleX(0)';
      }
    }

    this.celebrationOverlay.classList.add('show');
    this.celebrationOverlay.setAttribute('aria-hidden', 'false');

    if (this.celebrationDismissTimeout) clearTimeout(this.celebrationDismissTimeout);
    this.celebrationDismissTimeout = setTimeout(() => {
      this.hideCelebrationModal();
    }, dismissMs);
  }

  hideCelebrationModal() {
    this.stopCelebrationChimeLoop();
    if (!this.celebrationOverlay) return;
    this.celebrationOverlay.classList.remove('show');
    this.celebrationOverlay.setAttribute('aria-hidden', 'true');
    if (this.celebrationDismissTimeout) {
      clearTimeout(this.celebrationDismissTimeout);
      this.celebrationDismissTimeout = null;
    }
    if (this.titleFlashInterval) {
      clearInterval(this.titleFlashInterval);
      this.titleFlashInterval = null;
      this.updateDisplay();
    }
  }

  sendDesktopNotification() {
    if (this.settings.desktopNotif === false) return;
    if (!('Notification' in window)) return;

    const dispatch = () => {
      try {
        const lang = this.settings.lang || 'en';
        const dict = I18N[lang] || I18N.en;
        const title = dict.desktopNotifSessionTitle(this.sessionGoal);
        const mins = Math.floor(this.stats.totalFocusSeconds / 60);
        const body = dict.desktopNotifSessionBody(this.stats.completedSessions, mins);

        const notif = new Notification(title, {
          body: body,
          icon: './icons/icon-192.png',
          badge: './icons/icon-192.png',
          tag: 'focusdock-celebrate',
          renotify: true,
          requireInteraction: true
        });

        notif.onclick = () => {
          window.focus();
          notif.close();
        };
      } catch (err) {
        console.warn('[FocusDock] Desktop notification error:', err);
      }
    };

    if (Notification.permission === 'granted') {
      dispatch();
    } else if (Notification.permission === 'default') {
      Notification.requestPermission().then(perm => {
        if (perm === 'granted') dispatch();
      });
    }
  }

  flashTabTitle(alertText) {
    if (this.titleFlashInterval) clearInterval(this.titleFlashInterval);
    let toggle = false;

    this.titleFlashInterval = setInterval(() => {
      const formatted = this.timerDisplay ? this.timerDisplay.textContent : '00:00';
      document.title = toggle
        ? `🔔 ${alertText} — FocusDock`
        : `🎉 [${formatted}] HOÀN THÀNH — FocusDock`;
      toggle = !toggle;
    }, 1000);

    const stopFlash = () => {
      if (this.titleFlashInterval) {
        clearInterval(this.titleFlashInterval);
        this.titleFlashInterval = null;
        this.updateDisplay();
      }
      window.removeEventListener('focus', stopFlash);
      document.removeEventListener('visibilitychange', stopFlash);
    };

    window.addEventListener('focus', stopFlash, { once: true });
    document.addEventListener('visibilitychange', stopFlash, { once: true });
  }

  requestNotificationPermission() {
    if (this.settings.desktopNotif !== false && 'Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission().catch(() => {});
    }
  }

  toggleTimer() {
    if (this.isRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    if (this.isRunning) return;
    this.isRunning = true;

    this.requestNotificationPermission();

    const dict = I18N[this.settings.lang] || I18N.en;
    this.playBtnText.textContent = dict.pause;
    this.playIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>`;
    this.miniPlayIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>`;

    if (window.audioEngine) window.audioEngine.init();

    this.timerInterval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  pauseTimer() {
    this.isRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    const dict = I18N[this.settings.lang] || I18N.en;
    this.playBtnText.textContent = this.currentMode === 'focus' ? dict.startFocus : dict.startBreak;
    this.playIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
    this.miniPlayIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
  }

  resetTimer() {
    const wasPartiallyElapsed = this.remainingSeconds < this.totalSeconds && this.currentMode === 'focus';
    this.pauseTimer();
    this.remainingSeconds = this.totalSeconds;
    this.updateDisplay();

    if (wasPartiallyElapsed) {
      this.showEncouragementToast();
    }
  }

  showEncouragementToast() {
    if (!this.streakToast) return;
    const lang = this.settings.lang || 'en';
    const dict = I18N[lang] || I18N.en;

    this.streakToast.textContent = dict.resetEncouragement;
    this.streakToast.classList.add('encouragement', 'show');

    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      if (this.streakToast) {
        this.streakToast.classList.remove('show');
        setTimeout(() => {
          if (this.streakToast) this.streakToast.classList.remove('encouragement');
        }, 400);
      }
    }, 4800);
  }

  skipSession() {
    this.pauseTimer();
    this.onSessionComplete(false);
  }

  tick() {
    if (this.remainingSeconds > 0) {
      this.remainingSeconds--;
      if (this.currentMode === 'focus') {
        this.stats.totalFocusSeconds++;
        this.saveStats();
        this.updateStatsDisplay();
      }
      this.updateDisplay();
    } else {
      this.onSessionComplete(false);
    }
  }

  onSessionComplete(isManualSkip = false) {
    this.pauseTimer();

    const dict = I18N[this.settings.lang] || I18N.en;

    if (this.currentMode === 'focus') {
      this.stats.completedSessions++;
      this.stats.totalFocusSeconds = (this.stats.totalFocusSeconds || 0) + (this.settings.focusTime * 60);
      this.saveStats();
      // Update all-time stats
      this.allTimeStats.totalSessions = (this.allTimeStats.totalSessions || 0) + 1;
      this.allTimeStats.totalFocusSeconds = (this.allTimeStats.totalFocusSeconds || 0) + (this.settings.focusTime * 60);
      if (this.stats.streak > (this.allTimeStats.bestStreak || 1)) {
        this.allTimeStats.bestStreak = this.stats.streak;
      }
      this.saveAllTimeStats();
      this.updateStatsDisplay();

      if (this.sessionCount % 4 === 0) {
        this.setMode('longBreak');
      } else {
        this.setMode('shortBreak');
      }
      this.sessionCount++;
      this.sessionCounter.textContent = dict.sessionCount(((this.sessionCount - 1) % 4) + 1);

      this.celebrateStreak();
      if (this.settings.autoStartBreaks && !isManualSkip) {
        this.startTimer();
      }
    } else {
      // Break has completed -> Time to return to Focus!
      this.setMode('focus');
      this.showFocusReadyModal();
    }
  }

  updateDisplay() {
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    this.timerDisplay.textContent = formatted;
    this.miniDigits.textContent = formatted;

    const fraction = this.remainingSeconds / this.totalSeconds;
    const offset = this.CIRCUMFERENCE * (1 - fraction);
    this.timerProgress.style.strokeDashoffset = offset;

    const dict = I18N[this.settings.lang] || I18N.en;
    document.title = `${formatted} • ${this.currentMode === 'focus' ? dict.tabFocus : dict.tabShortBreak} — FocusDock`;
  }

  updateStatsDisplay() {
    this.statCompleted.textContent = this.stats.completedSessions;
    const mins = Math.floor(this.stats.totalFocusSeconds / 60);
    if (mins < 60) {
      this.statFocusTime.textContent = `${mins}m`;
    } else {
      const hrs = (mins / 60).toFixed(1);
      this.statFocusTime.textContent = `${hrs}h`;
    }
    this.statStreak.textContent = this.stats.streak;
  }

  // --------------------------------------------------------------------------
  // UI & Modes
  // --------------------------------------------------------------------------
  toggleMiniMode() {
    this.isMiniMode = !this.isMiniMode;
    document.body.classList.toggle('mini-mode', this.isMiniMode);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    this.settings.theme = next;
    document.documentElement.setAttribute('data-theme', next);
    this.saveSettings();
  }

  toggleMute() {
    if (window.audioEngine) {
      const isMuted = window.audioEngine.toggleMute();
      const icon = document.getElementById('iconVolume');
      if (isMuted) {
        icon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>`;
      } else {
        icon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>`;
      }
    }
  }

  openSettings() {
    this.settingsSnapshot = {
      lang: this.settings.lang,
      focusTime: this.settings.focusTime,
      shortBreak: this.settings.shortBreak,
      longBreak: this.settings.longBreak,
      autoStartBreaks: this.settings.autoStartBreaks,
      soundAlert: this.settings.soundAlert,
      desktopNotif: this.settings.desktopNotif,
      windowsStartup: this.windowsStartupEnabled,
      repeatAlarm: this.settings.repeatAlarm !== false
    };
    this.hasSavedSettings = false;

    this.selectLanguage.value = this.settings.lang || 'en';
    this.inputFocusTime.value = this.settings.focusTime;
    this.inputShortBreak.value = this.settings.shortBreak;
    this.inputLongBreak.value = this.settings.longBreak;
    this.toggleAutoBreaks.checked = this.settings.autoStartBreaks;
    this.toggleSoundAlert.checked = this.settings.soundAlert;
    if (this.toggleRepeatAlarm) {
      this.toggleRepeatAlarm.checked = this.settings.repeatAlarm !== false;
    }
    if (this.toggleDesktopNotif) {
      this.toggleDesktopNotif.checked = this.settings.desktopNotif !== false;
    }
    if (this.toggleWindowsStartup) {
      this.toggleWindowsStartup.checked = this.windowsStartupEnabled;
    }
    this.checkWindowsStartup();
    this.settingsModal.showModal();
  }

  cancelSettings() {
    if (!this.hasSavedSettings && this.settingsSnapshot) {
      this.applyLanguage(this.settingsSnapshot.lang, false);
      this.inputFocusTime.value = this.settingsSnapshot.focusTime;
      this.inputShortBreak.value = this.settingsSnapshot.shortBreak;
      this.inputLongBreak.value = this.settingsSnapshot.longBreak;
      this.toggleAutoBreaks.checked = this.settingsSnapshot.autoStartBreaks;
      this.toggleSoundAlert.checked = this.settingsSnapshot.soundAlert;
      if (this.toggleRepeatAlarm) {
        this.toggleRepeatAlarm.checked = this.settingsSnapshot.repeatAlarm !== false;
        this.settings.repeatAlarm = this.settingsSnapshot.repeatAlarm !== false;
      }
      if (this.toggleDesktopNotif) {
        this.toggleDesktopNotif.checked = this.settingsSnapshot.desktopNotif !== false;
      }
      if (this.toggleWindowsStartup) {
        this.toggleWindowsStartup.checked = this.settingsSnapshot.windowsStartup || false;
        if (this.windowsStartupEnabled !== (this.settingsSnapshot.windowsStartup || false)) {
          this.setWindowsStartup(this.settingsSnapshot.windowsStartup || false);
        }
      }
      this.selectLanguage.value = this.settingsSnapshot.lang;
    }
    this.settingsModal.close();
  }

  handleSaveSettings() {
    this.hasSavedSettings = true;
    this.settings.lang = this.selectLanguage.value || 'en';
    this.settings.focusTime = Math.max(1, parseInt(this.inputFocusTime.value) || 25);
    this.settings.shortBreak = Math.max(1, parseInt(this.inputShortBreak.value) || 5);
    this.settings.longBreak = Math.max(1, parseInt(this.inputLongBreak.value) || 15);
    this.settings.autoStartBreaks = this.toggleAutoBreaks.checked;
    this.settings.soundAlert = this.toggleSoundAlert.checked;
    if (this.toggleRepeatAlarm) {
      this.settings.repeatAlarm = this.toggleRepeatAlarm.checked;
    }
    if (this.toggleDesktopNotif) {
      this.settings.desktopNotif = this.toggleDesktopNotif.checked;
      if (this.settings.desktopNotif) {
        this.requestNotificationPermission();
      }
    }
    if (this.toggleWindowsStartup) {
      const wantStartup = this.toggleWindowsStartup.checked;
      this.settings.windowsStartup = wantStartup;
      if (this.windowsStartupEnabled !== wantStartup) {
        this.setWindowsStartup(wantStartup);
      }
    }

    this.saveSettings();
    this.applyLanguage(this.settings.lang, true);
    this.setMode(this.currentMode);
    this.settingsModal.close();
  }

  // --------------------------------------------------------------------------
  // Windows Startup Integration
  // --------------------------------------------------------------------------
  async checkWindowsStartup() {
    try {
      const res = await fetch('/api/startup', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        this.windowsStartupEnabled = !!data.enabled;
        this.settings.windowsStartup = this.windowsStartupEnabled;
        if (this.toggleWindowsStartup) {
          this.toggleWindowsStartup.checked = this.windowsStartupEnabled;
        }
        localStorage.setItem('focusdock_windows_startup', this.windowsStartupEnabled ? 'true' : 'false');
        return;
      }
    } catch (e) {
      // Fallback to local storage if running in standalone/offline mode
    }
    const saved = localStorage.getItem('focusdock_windows_startup');
    this.windowsStartupEnabled = (saved === 'true');
    this.settings.windowsStartup = this.windowsStartupEnabled;
    if (this.toggleWindowsStartup) {
      this.toggleWindowsStartup.checked = this.windowsStartupEnabled;
    }
  }

  async setWindowsStartup(enabled) {
    this.windowsStartupEnabled = !!enabled;
    this.settings.windowsStartup = this.windowsStartupEnabled;
    localStorage.setItem('focusdock_windows_startup', this.windowsStartupEnabled ? 'true' : 'false');
    const dict = I18N[this.settings.lang] || I18N.en;

    try {
      const res = await fetch('/api/startup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled: this.windowsStartupEnabled })
      });
      if (res.ok) {
        const data = await res.json();
        this.windowsStartupEnabled = !!data.enabled;
        this.settings.windowsStartup = this.windowsStartupEnabled;
        if (this.toggleWindowsStartup) {
          this.toggleWindowsStartup.checked = this.windowsStartupEnabled;
        }
        const msg = this.windowsStartupEnabled ? dict.toastStartupEnabled : dict.toastStartupDisabled;
        this.showStreakToast(msg);
        return;
      }
    } catch (e) {
      console.warn('[FocusDock] Startup API unavailable, saved to local preference:', e);
    }

    const msg = this.windowsStartupEnabled ? dict.toastStartupEnabled : dict.toastStartupDisabled;
    this.showStreakToast(msg);
  }

  // --------------------------------------------------------------------------
  // Chime Looping & Notification Alerts ("chuông báo reo nhiều lần nếu không bấm pass qua")
  // --------------------------------------------------------------------------
  startReminderChimeLoop() {
    this.stopReminderChimeLoop();
    if (this.reminderAlarmRinging) {
      this.reminderAlarmRinging.style.display = this.settings.repeatAlarm !== false ? 'flex' : 'none';
    }
    if (this.settings.soundAlert !== false && window.audioEngine) {
      window.audioEngine.playChime('bowl');
      this.pulseAlarmCard(this.reminderAlarmCard);
    }
    if (this.settings.repeatAlarm === false) return;

    this.reminderChimeCount = 1;
    this.activeReminderChimeInterval = setInterval(() => {
      if (!this.reminderAlarmOverlay || !this.reminderAlarmOverlay.classList.contains('show')) {
        this.stopReminderChimeLoop();
        return;
      }
      // Safety cap at 30 rings (~3.5 minutes)
      if (this.reminderChimeCount >= 30) {
        this.stopReminderChimeLoop();
        return;
      }
      this.reminderChimeCount++;
      if (this.settings.soundAlert !== false && window.audioEngine) {
        window.audioEngine.playChime('bowl');
        this.pulseAlarmCard(this.reminderAlarmCard);
      }
      // Re-trigger desktop notification on every 2nd chime (~14s) if not dismissed
      if (this.reminderChimeCount % 2 === 0 && this.activeAlarmReminder) {
        this.sendDesktopReminderNotification(this.activeAlarmReminder);
      }
    }, 7000);
  }

  stopReminderChimeLoop() {
    if (this.activeReminderChimeInterval) {
      clearInterval(this.activeReminderChimeInterval);
      this.activeReminderChimeInterval = null;
    }
    this.reminderChimeCount = 0;
    if (this.reminderAlarmRinging) {
      this.reminderAlarmRinging.style.display = 'none';
    }
  }

  startCelebrationChimeLoop() {
    this.stopCelebrationChimeLoop();
    if (this.celebrationRinging) {
      this.celebrationRinging.style.display = this.settings.repeatAlarm !== false ? 'flex' : 'none';
    }
    if (this.settings.soundAlert !== false && window.audioEngine) {
      window.audioEngine.playChime('bowl');
      this.pulseAlarmCard(this.celebrationCard);
    }
    // If repeat is off or autoStartBreaks is on, only sound once
    if (this.settings.repeatAlarm === false || this.settings.autoStartBreaks) return;

    this.celebrationChimeCount = 1;
    this.activeCelebrationChimeInterval = setInterval(() => {
      if (!this.celebrationOverlay || !this.celebrationOverlay.classList.contains('show')) {
        this.stopCelebrationChimeLoop();
        return;
      }
      // Safety cap at 30 rings (~3.5 minutes)
      if (this.celebrationChimeCount >= 30) {
        this.stopCelebrationChimeLoop();
        return;
      }
      this.celebrationChimeCount++;
      if (this.settings.soundAlert !== false && window.audioEngine) {
        window.audioEngine.playChime('bowl');
        this.pulseAlarmCard(this.celebrationCard);
      }
      if (this.celebrationChimeCount % 2 === 0) {
        this.sendDesktopNotification();
      }
    }, 7000);
  }

  stopCelebrationChimeLoop() {
    if (this.activeCelebrationChimeInterval) {
      clearInterval(this.activeCelebrationChimeInterval);
      this.activeCelebrationChimeInterval = null;
    }
    this.celebrationChimeCount = 0;
    if (this.celebrationRinging) {
      this.celebrationRinging.style.display = 'none';
    }
  }

  // --------------------------------------------------------------------------
  // Focus Ready Chime Loop & Modal ("âm báo đến phiên tập trung")
  // --------------------------------------------------------------------------
  startFocusReadyChimeLoop() {
    this.stopFocusReadyChimeLoop();
    if (this.focusReadyRinging) {
      this.focusReadyRinging.style.display = this.settings.repeatAlarm !== false ? 'flex' : 'none';
    }
    if (this.settings.soundAlert !== false && window.audioEngine) {
      window.audioEngine.playChime('focus');
      this.pulseAlarmCard(this.focusReadyCard);
    }
    if (this.settings.repeatAlarm === false) return;

    this.focusReadyChimeCount = 1;
    this.activeFocusReadyChimeInterval = setInterval(() => {
      if (!this.focusReadyOverlay || !this.focusReadyOverlay.classList.contains('show')) {
        this.stopFocusReadyChimeLoop();
        return;
      }
      // Safety cap at 30 rings (~3.5 minutes)
      if (this.focusReadyChimeCount >= 30) {
        this.stopFocusReadyChimeLoop();
        return;
      }
      this.focusReadyChimeCount++;
      if (this.settings.soundAlert !== false && window.audioEngine) {
        window.audioEngine.playChime('focus');
        this.pulseAlarmCard(this.focusReadyCard);
      }
      if (this.focusReadyChimeCount % 2 === 0) {
        this.sendDesktopFocusReadyNotification();
      }
    }, 7000);
  }

  stopFocusReadyChimeLoop() {
    if (this.activeFocusReadyChimeInterval) {
      clearInterval(this.activeFocusReadyChimeInterval);
      this.activeFocusReadyChimeInterval = null;
    }
    this.focusReadyChimeCount = 0;
    if (this.focusReadyRinging) {
      this.focusReadyRinging.style.display = 'none';
    }
  }

  showFocusReadyModal() {
    if (!this.focusReadyOverlay) return;

    const lang = this.settings.lang || 'en';
    const dict = I18N[lang] || I18N.en;

    if (this.sessionGoal) {
      if (this.focusReadyGoalBox) this.focusReadyGoalBox.style.display = 'flex';
      if (this.focusReadyGoalText) this.focusReadyGoalText.textContent = this.sessionGoal;
    } else {
      if (this.focusReadyGoalBox) this.focusReadyGoalBox.style.display = 'none';
    }

    this.startFocusReadyChimeLoop();

    this.focusReadyOverlay.classList.add('show');
    this.focusReadyOverlay.setAttribute('aria-hidden', 'false');

    // Tab title flashing
    this.flashTabTitle(dict.tabFlashFocusReady || '⚡ [TIME TO FOCUS!] FocusDock');

    // Desktop notification
    this.sendDesktopFocusReadyNotification();
  }

  hideFocusReadyModal() {
    this.stopFocusReadyChimeLoop();
    if (!this.focusReadyOverlay) return;
    this.focusReadyOverlay.classList.remove('show');
    this.focusReadyOverlay.setAttribute('aria-hidden', 'true');
    if (this.titleFlashInterval) {
      clearInterval(this.titleFlashInterval);
      this.titleFlashInterval = null;
      this.updateDisplay();
    }
  }

  snoozeBreak(minutes = 2) {
    this.setMode('shortBreak');
    this.remainingSeconds = minutes * 60;
    this.totalSeconds = minutes * 60;
    this.updateDisplay();
    this.startTimer();
    const dict = I18N[this.settings.lang] || I18N.en;
    this.showStreakToast(dict.toastBreakSnoozed);
  }

  sendDesktopFocusReadyNotification() {
    if (this.settings.desktopNotif === false) return;
    if (!('Notification' in window)) return;
    const dict = I18N[this.settings.lang] || I18N.en;

    const title = dict.desktopNotifFocusReadyTitle || '⚡ Time to Focus!';
    const body = dict.desktopNotifFocusReadyBody || 'Break time is over. Return to your desk and dive in! 🎯';
    const icon = './icons/icon-192.png';

    if (Notification.permission === 'granted') {
      try {
        new Notification(title, { body, icon, tag: 'focusdock-focus-ready', requireInteraction: true });
      } catch (e) {}
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(p => {
        if (p === 'granted') {
          try {
            new Notification(title, { body, icon, tag: 'focusdock-focus-ready', requireInteraction: true });
          } catch (e) {}
        }
      });
    }
  }

  pulseAlarmCard(cardEl) {
    if (!cardEl) return;
    cardEl.classList.remove('chime-strike');
    void cardEl.offsetWidth; // Trigger reflow for CSS animation restart
    cardEl.classList.add('chime-strike');
  }

  // --------------------------------------------------------------------------
  // Daily Scheduled Reminders & Alarm Engine
  // --------------------------------------------------------------------------
  loadReminders() {
    try {
      const saved = localStorage.getItem('focusdock_reminders');
      if (saved) {
        this.reminders = JSON.parse(saved);
      } else {
        // Pre-populate with default 16:00 Gym reminder so user's example works out of the box
        this.reminders = [
          {
            id: 'rem_default_gym',
            time: '16:00',
            title: 'Tập gym',
            icon: '🏋️‍♂️',
            days: 'daily',
            enabled: true,
            lastTriggeredDate: null
          }
        ];
        this.saveReminders();
      }
    } catch (e) {
      console.warn('Failed to load reminders:', e);
      this.reminders = [];
    }
    this.updateReminderBadgeDot();
  }

  saveReminders() {
    try {
      localStorage.setItem('focusdock_reminders', JSON.stringify(this.reminders));
    } catch (e) {
      console.warn('Failed to save reminders:', e);
    }
    this.updateReminderBadgeDot();
  }

  updateReminderBadgeDot() {
    if (!this.reminderBadgeDot) return;
    const hasActive = Array.isArray(this.reminders) && this.reminders.some(r => r.enabled);
    this.reminderBadgeDot.style.display = hasActive ? 'block' : 'none';
  }

  openRemindersModal() {
    this.renderReminders();
    if (this.remindersModal) {
      this.remindersModal.showModal();
    }
  }

  handleAddReminder() {
    const time = this.inputReminderTime ? this.inputReminderTime.value : '16:00';
    let title = this.inputReminderTitle ? this.inputReminderTitle.value.trim() : '';
    if (!title) {
      const dict = I18N[this.settings.lang] || I18N.en;
      title = dict.chipGym || 'Tập gym';
    }
    const days = this.selectReminderDays ? this.selectReminderDays.value : 'daily';
    const icon = this.selectedReminderIcon || '🏋️‍♂️';

    const newRem = {
      id: 'rem_' + Date.now(),
      time,
      title,
      icon,
      days,
      enabled: true,
      lastTriggeredDate: null
    };

    this.reminders.unshift(newRem);
    this.saveReminders();
    this.renderReminders();
    this.showStreakToast(`✓ Đã lên lịch nhắc nhở: ${time} - ${title}`);
  }

  deleteReminder(id) {
    this.reminders = this.reminders.filter(r => r.id !== id);
    this.saveReminders();
    this.renderReminders();
  }

  toggleReminder(id, enabled) {
    const rem = this.reminders.find(r => r.id === id);
    if (rem) {
      rem.enabled = enabled;
      this.saveReminders();
      this.renderReminders();
    }
  }

  renderReminders() {
    if (!this.remindersList) return;
    const dict = I18N[this.settings.lang] || I18N.en;
    this.remindersList.innerHTML = '';

    if (!this.reminders || this.reminders.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.className = 'reminders-empty';
      emptyDiv.innerHTML = `
        <div class="empty-icon">🔔</div>
        <div class="empty-text">${dict.noRemindersText || 'Chưa có lịch nhắc nhở nào được tạo.'}</div>
        <button type="button" class="btn secondary btn-add-sample" id="btnAddSampleReminder">
          ${dict.addSampleGymBtn || '🏋️‍♂️ Thêm mẫu: 16:00 Tập gym'}
        </button>
      `;
      this.remindersList.appendChild(emptyDiv);

      const btnSample = emptyDiv.querySelector('#btnAddSampleReminder');
      if (btnSample) {
        btnSample.addEventListener('click', () => {
          this.reminders.push({
            id: 'rem_default_gym',
            time: '16:00',
            title: 'Tập gym',
            icon: '🏋️‍♂️',
            days: 'daily',
            enabled: true,
            lastTriggeredDate: null
          });
          this.saveReminders();
          this.renderReminders();
        });
      }
      return;
    }

    this.reminders.forEach(rem => {
      let daysLabel = dict.daysOptionDaily;
      if (rem.days === 'weekdays') daysLabel = dict.daysOptionWeekdays;
      if (rem.days === 'weekends') daysLabel = dict.daysOptionWeekends;

      const item = document.createElement('div');
      item.className = 'reminder-item' + (rem.enabled ? '' : ' disabled');
      item.innerHTML = `
        <div class="reminder-item-left">
          <span class="reminder-item-icon">${rem.icon || '⏰'}</span>
          <div class="reminder-item-info">
            <div class="reminder-item-time-title">
              <span class="reminder-item-time">${rem.time}</span>
              <strong class="reminder-item-title">${this.escapeHtml(rem.title)}</strong>
            </div>
            <span class="reminder-item-days">${daysLabel}</span>
          </div>
        </div>
        <div class="reminder-item-actions">
          <button type="button" class="btn-test-reminder" title="Test Alert" aria-label="Test Alert">🔔</button>
          <label class="switch">
            <input type="checkbox" class="reminder-item-toggle" ${rem.enabled ? 'checked' : ''}>
            <span class="slider"></span>
          </label>
          <button type="button" class="btn-delete-reminder" title="Delete" aria-label="Delete">🗑️</button>
        </div>
      `;

      // Event bindings for buttons
      const testBtn = item.querySelector('.btn-test-reminder');
      testBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.triggerReminderAlert(rem, false);
      });

      const toggle = item.querySelector('.reminder-item-toggle');
      toggle.addEventListener('change', (e) => {
        this.toggleReminder(rem.id, e.target.checked);
      });

      const delBtn = item.querySelector('.btn-delete-reminder');
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.deleteReminder(rem.id);
      });

      this.remindersList.appendChild(item);
    });
  }

  startReminderChecker() {
    if (this.reminderCheckerInterval) clearInterval(this.reminderCheckerInterval);
    this.reminderCheckerInterval = setInterval(() => this.checkReminders(), 15000);
    this.checkReminders();
  }

  checkReminders() {
    if (!this.reminders || this.reminders.length === 0) return;

    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const currentTimeStr = `${hh}:${mm}`;
    const dayOfWeek = now.getDay(); // 0 = Sun, 6 = Sat
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const todayDateStr = now.toDateString();
    const nowMs = now.getTime();

    // Check snoozed reminders
    if (this.snoozedReminders && this.snoozedReminders.length > 0) {
      const readySnoozed = this.snoozedReminders.filter(s => s.snoozeUntil <= nowMs);
      if (readySnoozed.length > 0) {
        this.snoozedReminders = this.snoozedReminders.filter(s => s.snoozeUntil > nowMs);
        readySnoozed.forEach(rem => {
          this.triggerReminderAlert(rem, true);
        });
      }
    }

    // Check scheduled reminders
    this.reminders.forEach(rem => {
      if (!rem.enabled) return;
      if (rem.days === 'weekdays' && isWeekend) return;
      if (rem.days === 'weekends' && !isWeekend) return;

      if (rem.time === currentTimeStr && rem.lastTriggeredDate !== todayDateStr) {
        rem.lastTriggeredDate = todayDateStr;
        this.saveReminders();
        this.triggerReminderAlert(rem, false);
      }
    });
  }

  triggerReminderAlert(reminder, isSnoozed = false) {
    this.activeAlarmReminder = reminder;

    // Sound singing bowl chime and start repeat loop if not dismissed
    this.startReminderChimeLoop();

    // Update overlay content
    if (this.reminderAlarmIcon) this.reminderAlarmIcon.textContent = reminder.icon || '⏰';
    if (this.reminderAlarmTime) this.reminderAlarmTime.textContent = reminder.time;
    if (this.reminderAlarmTitle) this.reminderAlarmTitle.textContent = reminder.title;

    const dict = I18N[this.settings.lang] || I18N.en;
    if (this.reminderAlarmSubtitle) {
      this.reminderAlarmSubtitle.textContent = typeof dict.reminderAlarmSubtitle === 'function'
        ? dict.reminderAlarmSubtitle(reminder.time, reminder.title)
        : `It is ${reminder.time}! Time for ${reminder.title}! Take a break and get moving! 💪`;
    }

    // Show glowing full-screen alarm overlay
    if (this.reminderAlarmOverlay) {
      this.reminderAlarmOverlay.classList.add('show');
      this.reminderAlarmOverlay.setAttribute('aria-hidden', 'false');
    }

    // Flash document title
    if (this.titleFlashInterval) clearInterval(this.titleFlashInterval);
    let flash = false;
    const originalTitle = document.title;
    const alertTitle = typeof dict.tabFlashReminder === 'function'
      ? dict.tabFlashReminder(reminder.title, reminder.time)
      : `⏰ [${reminder.time} ${reminder.title}] FocusDock`;

    this.titleFlashInterval = setInterval(() => {
      document.title = flash ? alertTitle : originalTitle;
      flash = !flash;
    }, 1000);

    // Desktop notification
    this.sendDesktopReminderNotification(reminder);
  }

  hideReminderAlarm() {
    this.stopReminderChimeLoop();
    if (this.reminderAlarmOverlay) {
      this.reminderAlarmOverlay.classList.remove('show');
      this.reminderAlarmOverlay.setAttribute('aria-hidden', 'true');
    }
    if (this.titleFlashInterval) {
      clearInterval(this.titleFlashInterval);
      this.titleFlashInterval = null;
      this.updateDisplay();
    }
    this.activeAlarmReminder = null;
  }

  snoozeReminder(reminder, minutes = 5) {
    if (!this.snoozedReminders) this.snoozedReminders = [];
    this.snoozedReminders.push({
      ...reminder,
      snoozeUntil: Date.now() + minutes * 60 * 1000
    });

    const dict = I18N[this.settings.lang] || I18N.en;
    const msg = typeof dict.snoozeToastText === 'function'
      ? dict.snoozeToastText(reminder.title)
      : `💤 "${reminder.title}" snoozed for ${minutes} minutes.`;
    this.showStreakToast(msg);
  }

  showReminderEncouragementToast(reminder) {
    if (this.confetti) {
      this.confetti.burst(60);
    }
    this.showStreakToast(`🎉 Tuyệt vời! Hãy hoàn thành "${reminder.title}" thật xuất sắc nhé! 💪`);
  }

  sendDesktopReminderNotification(reminder) {
    if (!('Notification' in window)) return;
    const dict = I18N[this.settings.lang] || I18N.en;
    const title = typeof dict.desktopNotifReminderTitle === 'function'
      ? dict.desktopNotifReminderTitle(reminder.title, reminder.time)
      : `⏰ Reminder: ${reminder.title} (${reminder.time})`;
    const body = typeof dict.desktopNotifReminderBody === 'function'
      ? dict.desktopNotifReminderBody(reminder.title, reminder.time)
      : `It is ${reminder.time}! Time for ${reminder.title}! Take a break and get moving! 💪`;
    const icon = './icons/icon-192.png';

    if (Notification.permission === 'granted') {
      try {
        new Notification(title, { body, icon, tag: 'focusdock-reminder', requireInteraction: true });
      } catch (e) {}
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(p => {
        if (p === 'granted') {
          try {
            new Notification(title, { body, icon, tag: 'focusdock-reminder', requireInteraction: true });
          } catch (e) {}
        }
      });
    }
  }

  handleUrlParams() {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.has('store') || params.has('fullscreen')) {
        document.body.classList.add('store-mode');
      }
      if (params.has('mini')) {
        this.toggleMiniMode();
      }
      if (params.get('theme')) {
        this.settings.theme = params.get('theme');
        document.documentElement.setAttribute('data-theme', this.settings.theme);
      }
      if (params.get('lang')) {
        this.applyLanguage(params.get('lang'));
      }
      if (params.get('mode')) {
        this.setMode(params.get('mode'));
      }
      if (params.has('seconds')) {
        this.remainingSeconds = parseInt(params.get('seconds')) || this.remainingSeconds;
        this.updateDisplay();
      }
      if (params.has('activeSounds')) {
        const brown = document.querySelector('.sound-card[data-sound="brown"]');
        const rain = document.querySelector('.sound-card[data-sound="rain"]');
        if (brown) {
          brown.classList.add('active');
          brown.querySelector('.sound-toggle').checked = true;
        }
        if (rain) {
          rain.classList.add('active');
          rain.querySelector('.sound-toggle').checked = true;
        }
      }
      if (params.has('settings')) {
        setTimeout(() => this.openSettings(), 120);
      }
      if (params.has('customSoundModal')) {
        setTimeout(() => this.openCustomSoundModal(), 120);
      }
      if (params.has('reminders')) {
        setTimeout(() => this.openRemindersModal(), 120);
      }
    } catch (e) {}
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.focusDock = new FocusDockApp();
});
