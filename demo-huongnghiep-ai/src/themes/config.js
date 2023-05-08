const THEMES = Object.freeze({
  color: {
    white: '#fff',
    black: '#000',
    error: '#ff4d4f',
    lightWhite: '#f3f2ef',
    grayBorder: '#f0f0f0',
    tableBgGray: '#f0f2f5',
    modalBgGray: '#dedede',
    bgUploadImage: '#767676',
    inputSuffix: '#222',
    active: '#00be4b',
    btnBgDefault: '#eee',
    activeDefault: '#1890ff',
    red: '#ff0003',
    orange: '#ffac00',
  },
  darkTheme: {
    color: '#fff',
    bg: '#000',
    backgroundItemActive: '#333',
  },
  layout: {
    sider: {
      width: 304,
    },
    header: {
      bg: '#FFF',
      color: '#000',
    },
  },
  define: {
    formLogin: {
      padding: 5, // 5%
    },
  },
  menu: {
    itemFontSize: '13px',
    iconSize: '16px',
  },
  pageHeader: {
    button: {
      height: '46px',
      width: '130px',
      borderRadius: '6px',
      border: '1px solid',
    },
  },
  modal: {
    headerPadding: '0.75rem',
    headerFontSize: '24px',
    bodyPadding: 0,
    contentPadding: '1.5rem',
    btnPadding: '1rem',
    borderRadius: '0.75rem',
  },
  form: {
    itemMarginBottom: '0.75rem',
    height: '550px',
    heightScroll: '420px',
  },
  container: {
    padding: '2rem',
  },
});

module.exports = THEMES;
