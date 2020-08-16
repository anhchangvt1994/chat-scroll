// NOTE - Định nghĩa construct mẫu để kiểm tra format từ define có chính xác hay không
export const CHAT_SOCIAL_INFO_CONSTRUCT = [
  {
    key: 'zalo',
    id: {
      required: true,
    },

    page_name: {
      required: false,
    }
  },

  {
    key: 'messenger',
    id: {
      required: false,
    },

    page_name: {
      required: true,
    }
  },
];

export const CHAT_SOCIAL_INFO = window.CHAT_SOCIAL_INFO || null;