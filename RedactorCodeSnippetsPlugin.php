<?php
namespace Craft;

class RedactorCodeSnippetsPlugin extends BasePlugin
{
    function getName()
    {
        return Craft::t('Redactor Code Snippets');
    }

    function getVersion()
    {
        return '1.0';
    }

    function getDeveloper()
    {
        return 'Kisu';
    }

    function getDeveloperUrl()
    {
        return 'http://keithcod.es';
    }

    function init() {
        craft()->templates->includeJsResource('redactorcodesnippets/ace/ace.js', false);
        craft()->templates->includeCssResource('redactorcodesnippets/code-snippets-plugin-redactor.css');
        craft()->templates->includeCssResource('redactorcodesnippets/devicon/devicon.min.css');

        if ( craft()->request->isCpRequest() && craft()->userSession->isLoggedIn() ) {
            craft()->templates->includeJsResource('redactorcodesnippets/code-snippets-plugin-redactor.js', false);
        }else {
            craft()->templates->includeJsResource('redactorcodesnippets/code-snippets-formatting.js', false);
            craft()->templates->includeJsResource('lib/jquery-2.2.4.min.js?d=1487195936', true);

        }
    }
}
