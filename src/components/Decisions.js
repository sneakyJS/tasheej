import React from "react";

export default class Decisions extends React.Component {
  state = {
    message: ["هل انت حمساوي عرص؟"],
    counter: 0
  };
  onYes = () => {
    let currentMessage = this.state.message[this.state.message.length - 1];
    switch (currentMessage) {
      case "هل انت حمساوي عرص؟":
        this.setState(({ message }) => ({
          message: message.concat("هل انت غبي متخلف وجاهل؟")
        }));
        break;
      case "هل انت غبي متخلف وجاهل؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "هل تعاني من عقدة النقص ودائم الاحساس بالدونية وتحسد الجميع لانهم بشر وانت شبه حيوان ؟"
          )
        }));
        break;
      case "هل تعاني من عقدة النقص ودائم الاحساس بالدونية وتحسد الجميع لانهم بشر وانت شبه حيوان ؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "هل عندك شخصية وانفرادية وانك لست مجرد خروف من قطيع الخرفان؟"
          )
        }));
        break;
      case "هل عندك شخصية وانفرادية وانك لست مجرد خروف من قطيع الخرفان؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "اذهب العب التنس مع اميرك حتى يلحس ما تبقى من آدميتك ويحولك الى خروف ذليل"
          )
        }));
        setTimeout(() => {
          this.setState(({ message }) => ({
            message: message.concat(
              "هل عندك شخصية وانفرادية وانك لست مجرد خروف من قطيع الخرفان؟"
            )
          }));
        }, 3500);
        break;
      case "هل تجيد استخدام الصوشيال ميضيا مثل الفصابوك والعياذ بالله ؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "هل هناك منشور يفضح عورتكم ونصبكم وغبائكم وجهلكم الشديد؟"
          )
        }));
        break;
      case "هل هناك منشور يفضح عورتكم ونصبكم وغبائكم وجهلكم الشديد؟":
        this.setState(({ message }) => ({
          message: message.concat("انعتهم بالخونة , هل تراجعوا عن مواقفهم؟")
        }));
        break;
      case "انعتهم بالخونة , هل تراجعوا عن مواقفهم؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "أحسنت ايها الخروف, خذه معك لتلعبون التنس في احد الجلسات بكل الوضعيات المعروفة والغير معروفة والاكس اكس اكس "
          )
        }));
        setTimeout(() => {
          this.setState(({ message }) => ({
            message: message.concat("انعتهم بالخونة , هل تراجعوا عن مواقفهم؟")
          }));
        }, 3500);
        break;
      case "انعتهم بالجواسيس والكفر والزندقة والارتداد والانحلال والبطاطا , هل تراجعوا؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "أحسنت ايها الخروف, خذه معك لتلعبون التنس في احد الجلسات بكل الوضعيات المعروفة والغير معروفة والاكس اكس اكس "
          )
        }));
        setTimeout(() => {
          this.setState(({ message }) => ({
            message: message.concat(
              "انعتهم بالجواسيس والكفر والزندقة والارتداد والانحلال والبطاطا , هل تراجعوا؟"
            )
          }));
        }, 3500);
        break;
      case "تقيأ ثقافتك المعفنة وانعتهم بالصهيوامريكماسونيون, كلما زاد طول الكلمة كلما ظن الاغبياء انك تمتلك شيئا من الذكاء, هل تراجعوا ؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "أحسنت ايها الخروف, خذه معك لتلعبون التنس في احد الجلسات بكل الوضعيات المعروفة والغير معروفة والاكس اكس اكس "
          )
        }));
        setTimeout(() => {
          this.setState(({ message }) => ({
            message: message.concat(
              "تقيأ ثقافتك المعفنة وانعتهم بالصهيوامريكماسونيون, كلما زاد طول الكلمة كلما ظن الاغبياء انك تمتلك شيئا من الذكاء, هل تراجعوا ؟"
            )
          }));
        }, 3500);
        break;
      case "اذا كان المنشور يفضح عرض واحد من قاداتك الذين يلعبون التنس فيك, اذكر لهم محاسنهم وكيف انهم لعيبة تنس من الطراز الاول, هل تراجعوا؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "أحسنت ايها الخروف, خذه معك لتلعبون التنس في احد الجلسات بكل الوضعيات المعروفة والغير معروفة والاكس اكس اكس "
          )
        }));
        setTimeout(() => {
          this.setState(({ message }) => ({
            message: message.concat(
              "اذا كان المنشور يفضح عرض واحد من قاداتك الذين يلعبون التنس فيك, اذكر لهم محاسنهم وكيف انهم لعيبة تنس من الطراز الاول, هل تراجعوا؟"
            )
          }));
        }, 3500);
        break;
      case "والله يا خال في هادي الحالة ملكاش غير تطخه لانكم بهايم عارفين حالكم نصابين فبدل ما تناقش سياستك بالحجة بتروح تقمع اللي بخالفك, بتعرف مكانه؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "اقتله واعتبر حالك صاحب حق وهو صاحب باطل, لانه كسم المنطق برضو"
          )
        }));
        break;
      default:
        return false;
    }
  };
  onNo = () => {
    let currentMessage = this.state.message[this.state.message.length - 1];
    switch (currentMessage) {
      case "هل انت حمساوي عرص؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "تكاثر يا زم, ولاد الوسخة الحماميس بتكاثروا زي الارانب مش ملحقين عليهم, بس الكويز هادا مش الك, مخصص للحماميس بس"
          )
        }));
        setTimeout(() => {
          this.setState(({ message }) => ({
            message: message.concat("هل انت حمساوي عرص؟")
          }));
        }, 4000);
        break;
      case "هل انت غبي متخلف وجاهل؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "تكذبش يا عرص, فش حمساوي عنده ذرة ذكاء, ولا خلية دماغية وحدة شغالة عندكم"
          )
        }));
        setTimeout(() => {
          this.setState(({ message }) => ({
            message: message.concat("هل انت غبي متخلف وجاهل؟")
          }));
        }, 3500);
        break;
      case "هل تعاني من عقدة النقص ودائم الاحساس بالدونية وتحسد الجميع لانهم بشر وانت شبه حيوان ؟":
        this.setState(({ message }) => ({
          message: message.concat("عارفك حمساوي الكذب في دمك, بس حاول متكذبش")
        }));
        setTimeout(() => {
          this.setState(({ message }) => ({
            message: message.concat(
              "هل تعاني من عقدة النقص ودائم الاحساس بالدونية وتحسد الجميع لانهم بشر وانت شبه حيوان ؟"
            )
          }));
        }, 3500);
        break;
      case "هل عندك شخصية وانفرادية وانك لست مجرد خروف من قطيع الخرفان؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "هل تجيد استخدام الصوشيال ميضيا مثل الفصابوك والعياذ بالله ؟"
          )
        }));
        break;
      case "هل تجيد استخدام الصوشيال ميضيا مثل الفصابوك والعياذ بالله ؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "روح لاميرك يعلمك كيف تستعمل الفصابوك خلال مباراة تنس شديدة الوطيس وبعدين ارجع"
          )
        }));
        setTimeout(() => {
          this.setState(({ message }) => ({
            message: message.concat(
              "هل تجيد استخدام الصوشيال ميضيا مثل الفصابوك والعياذ بالله ؟"
            )
          }));
        }, 3500);
        break;
      case "هل هناك منشور يفضح عورتكم ونصبكم وغبائكم وجهلكم الشديد؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "اذا انشر قرفك وخراءك على الصوشيال ميضيا لتكون خروف وسحيج مطيع"
          )
        }));
        setTimeout(() => {
          this.setState(({ message }) => ({
            message: message.concat(
              "هل هناك منشور يفضح عورتكم ونصبكم وغبائكم وجهلكم الشديد؟"
            )
          }));
        }, 3500);
        break;
      case "انعتهم بالخونة , هل تراجعوا عن مواقفهم؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "انعتهم بالجواسيس والكفر والزندقة والارتداد والانحلال والبطاطا , هل تراجعوا؟"
          )
        }));
        break;
      case "انعتهم بالجواسيس والكفر والزندقة والارتداد والانحلال والبطاطا , هل تراجعوا؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "تقيأ ثقافتك المعفنة وانعتهم بالصهيوامريكماسونيون, كلما زاد طول الكلمة كلما ظن الاغبياء انك تمتلك شيئا من الذكاء, هل تراجعوا ؟"
          )
        }));
        break;
      case "تقيأ ثقافتك المعفنة وانعتهم بالصهيوامريكماسونيون, كلما زاد طول الكلمة كلما ظن الاغبياء انك تمتلك شيئا من الذكاء, هل تراجعوا ؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "اذا كان المنشور يفضح عرض واحد من قاداتك الذين يلعبون التنس فيك, اذكر لهم محاسنهم وكيف انهم لعيبة تنس من الطراز الاول, هل تراجعوا؟"
          )
        }));
        break;
      case "اذا كان المنشور يفضح عرض واحد من قاداتك الذين يلعبون التنس فيك, اذكر لهم محاسنهم وكيف انهم لعيبة تنس من الطراز الاول, هل تراجعوا؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "والله يا خال في هادي الحالة ملكاش غير تطخه لانكم بهايم عارفين حالكم نصابين فبدل ما تناقش سياستك بالحجة بتروح تقمع اللي بخالفك, بتعرف مكانه؟"
          )
        }));
        break;
      case "والله يا خال في هادي الحالة ملكاش غير تطخه لانكم بهايم عارفين حالكم نصابين فبدل ما تناقش سياستك بالحجة بتروح تقمع اللي بخالفك, بتعرف مكانه؟":
        this.setState(({ message }) => ({
          message: message.concat(
            "بعبص حالك واستنى لحد ما تعرف مكانه والعب كثرا من التنس"
          )
        }));
        setTimeout(() => {
          this.setState(({ message }) => ({
            message: message.concat(
              "والله يا خال في هادي الحالة ملكاش غير تطخه لانكم بهايم عارفين حالكم نصابين فبدل ما تناقش سياستك بالحجة بتروح تقمع اللي بخالفك, بتعرف مكانه؟"
            )
          }));
        }, 3500);
        break;
      default:
        return false;
    }
  };
  render() {
    let message = this.state.message[this.state.message.length - 1];
    return (
      <div id="decision-container">
        <div className="partial-container">
          <h2>{message}</h2>
          <div className="buttons-container">
            <button onClick={this.onYes} id="yes">
              نعم
            </button>
            <button id="no" onClick={this.onNo}>
              لا
            </button>
          </div>
        </div>
        <div>
          <h3>لا خير في امة حكمتها لحية</h3>
        </div>
      </div>
    );
  }
}
