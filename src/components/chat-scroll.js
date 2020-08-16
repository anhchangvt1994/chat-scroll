import Vue from 'vue';
import TheChatScroll from './TheChatScroll';
import {
  CHAT_SOCIAL_INFO,
  CHAT_SOCIAL_INFO_CONSTRUCT,
} from '../define';

export default (() => {
  let _elMzChatBox = null;

  // NOTE - Tạo biến chứa danh sách chat social info define, update sau khi filter qua chat social info construct
  let _arrChatSocialInfoDefine = CHAT_SOCIAL_INFO;

  const __appendChatBox = (() => {
    const elChatBoxInit = document.createElement('div');

    elChatBoxInit.id = 'mz-chat-scroll__block';
    elChatBoxInit.className = 'mz-chat-scroll__block';

    const body = document.getElementsByTagName('body');

    body?.[0]?.appendChild(elChatBoxInit);

    _elMzChatBox = document.getElementById('mz-chat-scroll__block');

    if(!_elMzChatBox) {
      return false;
    }

    return true;
  })(); // __appendChatBox()

  const _initChatBox = () => {
    const _elMzChatBox = document.getElementById('mz-chat-scroll__block');

    if(
      !_elMzChatBox &&
      !__appendChatBox
    ) {
      return;
    }

    new Vue({
      render: (h) => h(
        TheChatScroll,
        {
          props: {
            arrChatSocialInfoDefine: _arrChatSocialInfoDefine,
          },
        }
      ),
    }).$mount(_elMzChatBox);
  }; // _initChatBox()

  const _filterChatSocialInfo = () => {
    let tmpChatSocialInfoFiltered = {};
    console.log(tmpChatSocialInfoFiltered);

    CHAT_SOCIAL_INFO_CONSTRUCT.forEach(function(chatSocialInfoConstructItem) {
      const chatSocialInfoDefine = _arrChatSocialInfoDefine[chatSocialInfoConstructItem.key];

      if(
        (
          chatSocialInfoConstructItem.id.required &&
          !chatSocialInfoDefine.id
        )
        ||
        (
          chatSocialInfoConstructItem.page_name.required &&
          !chatSocialInfoDefine.page_name
        )
      ) {
        return;
      }

      tmpChatSocialInfoFiltered[chatSocialInfoConstructItem.key] = chatSocialInfoDefine;
    });

    _arrChatSocialInfoDefine = tmpChatSocialInfoFiltered;
  }; // __hasChatSocialInfoToRender

  return {
    init() {
      // NOTE - Nếu _arrChatSocialInfoDefine rỗng từ đầu thì return luôn
      if(!_arrChatSocialInfoDefine) {
        return;
      }

      // NOTE - Nếu _arrChatSocialInfoDefine không rỗng thì filter
      _filterChatSocialInfo();

      // NOTE - Nếu sau filter mà _arrChatSocialInfoDefine rỗng thì return
      if(!_arrChatSocialInfoDefine) {
        return;
      }

      _initChatBox();
    },
  };
})();