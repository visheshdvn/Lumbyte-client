import React, { useState, useRef, useEffect } from "react"

const Search = () => {
  const inputEleRef = useRef(null)

  const [searchInput, setsearchInput] = useState({
    searchInputVal: "",
    start: 0,
    end: 0
  })

  const { searchInputVal } = searchInput

  function onChangeHandler(e) {
    const { name, value } = inputEleRef.current
    setsearchInput({ ...searchInput, [name]: value })
  }

  function formSubmitHandler(e) {
    e.preventDefault()
    //   submission logic here
  }

  useEffect(() => {
    if (inputEleRef.current.value === "") {
      inputEleRef.current.setCustomValidity("Invalid field.")
    } else {
      inputEleRef.current.setCustomValidity("")
    }
  }, [searchInputVal])

  return (
    <section>
      <div className="container m-auto my-10">
        <form className="max-w-5xl mx-auto" onSubmit={formSubmitHandler}>
          <div className="relative h-20 overflow-hidden">
            <input
              id="SearchInp"
              name="searchInputVal"
              type="text"
              ref={inputEleRef}
              className="form-input font-roboto-cond leading-5 absolute bottom-1 pb-1 text-3xl w-full h-9 border-none focus:outline-none bg-transparent overflow-visible"
              onChange={onChangeHandler}
              value={searchInputVal}
              spellCheck={false}
            />

            <label
              htmlFor="SearchInp"
              className="label-name absolute bottom-0 left-0 h-full w-full pointer-events-none border-b border-gray-400"
            >
              <span className="content-name absolute bottom-0 left-0 transition-all ease-in duration-300 font-roboto-cond text-3xl text-gray-400">
                Search Bytes
              </span>
            </label>
            <button
              type="submit"
              className="search-btn right-0 h-9 w-9 absolute bottom-1 text-gray-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Search
