import React from 'react'

const QAPage = () => {
  return (
    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div class="sm:col-span-4">
        <label
          for="username"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          Username
        </label>
        <div class="mt-2">
          <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="text"
              name="username"
              id="username"
              autocomplete="username"
              class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600">
            이름을 입력해주세요.
          </p>
        </div>
      </div>

      <div class="sm:col-span-4">
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          Email
        </label>
        <div class="mt-2">
          <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600">
            이메일을 입력해주세요.
          </p>
        </div>
      </div>

      <div class="col-span-full">
        <label
          for="about"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          About
        </label>

        <div class="mt-2">
          <textarea
            id="about"
            name="about"
            rows="3"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
        <p class="mt-3 text-sm leading-6 text-gray-600">
          질문이나 건의사항에 대해 입력해주세요.
        </p>
      </div>
      <button
        type="submit"
        className="p-2 text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
      >
        제출
      </button>
    </div>
  )
}

export default QAPage
