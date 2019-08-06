import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';
import ListUI from '@ckeditor/ckeditor5-list/src/listui';
import ListEditing from '@ckeditor/ckeditor5-list/src/listediting';


class App extends Component {
    render() {
        const config = {
          plugins: [ Essentials, Bold, Italic, Paragraph, WordCount, Heading, Paragraph, HeadingButtonsUI, ParagraphButtonUI, ListEditing, ListUI],
          toolbar: [ 'paragraph', 'heading2', '|', 'bold', 'italic', '|', 'numberedList', 'bulletedList'],
          heading: {
            options: [
                { model: 'paragraph', title: 'Normal', class: 'ck-heading_paragraph' },
                { model: 'heading2', view: 'h2', title: 'Heading', class: 'ck-heading_heading' }
            ]
        }
        };
        return (
            <div className="App">
                <CKEditor
                    editor={ ClassicEditor }
                    config = { config }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        const wordCountPlugin = editor.plugins.get( 'WordCount' );
                        const wordCountWrapper = document.getElementById( 'word-count' );

                        wordCountWrapper.appendChild( wordCountPlugin.wordCountContainer );

                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ editor => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ editor => {
                        console.log( 'Focus.', editor );
                    } }
                />
                <div id="word-count"></div>
            </div>
        );
    }
}

export default App;