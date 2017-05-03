<?php
namespace Craft;

class RedactorCodeSnippets_CodeSnippetFieldType extends BaseFieldType{
    public function getName(){
        return Craft::t('Code Snippet');
    }

    public function defineContentAttribute(){
        //return AttributeType::Number;
        return array(AttributeType::String, 'column' => ColumnType::Text);
    }

    public function getInputHtml($name, $value){
        // Reformat the input name into something that looks more like an ID
        $id = craft()->templates->formatInputId($name);

        // Figure out what that ID is going to look like once it has been namespaced
        $namespacedId = craft()->templates->namespaceInputId($id);

        // Include our Javascript
        craft()->templates->includeJs("$('#{$namespacedId}').editorcodesnippet('{$namespacedId}', '{$name}', 'javascript');");

        return craft()->templates->render('redactorcodesnippets/codesnippet_field', array(
            'name'  => $name,
            'value' => $value,
            'id'    => $id
        ));
    }
}
