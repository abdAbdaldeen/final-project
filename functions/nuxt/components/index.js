export const AppFooter = () => import('../../components/AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => wrapFunctional(c.default || c))
export const AppHeader = () => import('../../components/AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c))
export const AskQuestionBox = () => import('../../components/AskQuestionBox.vue' /* webpackChunkName: "components/ask-question-box" */).then(c => wrapFunctional(c.default || c))
export const CategoriesBar = () => import('../../components/CategoriesBar.vue' /* webpackChunkName: "components/categories-bar" */).then(c => wrapFunctional(c.default || c))
export const CategoryDescription = () => import('../../components/CategoryDescription.vue' /* webpackChunkName: "components/category-description" */).then(c => wrapFunctional(c.default || c))
export const QuestionBox = () => import('../../components/QuestionBox.vue' /* webpackChunkName: "components/question-box" */).then(c => wrapFunctional(c.default || c))
export const SignUpForm = () => import('../../components/Sign-up-Form.vue' /* webpackChunkName: "components/sign-up-form" */).then(c => wrapFunctional(c.default || c))
export const SignInForm = () => import('../../components/SignInForm.vue' /* webpackChunkName: "components/sign-in-form" */).then(c => wrapFunctional(c.default || c))
export const SignInFormDialog = () => import('../../components/SignInFormDialog.vue' /* webpackChunkName: "components/sign-in-form-dialog" */).then(c => wrapFunctional(c.default || c))
export const CommonMyVueEditor = () => import('../../components/common/MyVueEditor.vue' /* webpackChunkName: "components/common-my-vue-editor" */).then(c => wrapFunctional(c.default || c))
export const CommonQuestionList = () => import('../../components/common/QuestionList.vue' /* webpackChunkName: "components/common-question-list" */).then(c => wrapFunctional(c.default || c))
export const QuestionPageComponentsAddVote = () => import('../../components/questionPageComponents/AddVote.vue' /* webpackChunkName: "components/question-page-components-add-vote" */).then(c => wrapFunctional(c.default || c))
export const QuestionPageComponentsAnswerBox = () => import('../../components/questionPageComponents/AnswerBox.vue' /* webpackChunkName: "components/question-page-components-answer-box" */).then(c => wrapFunctional(c.default || c))
export const QuestionPageComponentsReport = () => import('../../components/questionPageComponents/Report.vue' /* webpackChunkName: "components/question-page-components-report" */).then(c => wrapFunctional(c.default || c))
export const QuestionPageComponentsTheQuestion = () => import('../../components/questionPageComponents/TheQuestion.vue' /* webpackChunkName: "components/question-page-components-the-question" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
